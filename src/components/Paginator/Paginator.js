import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/posts";
import "./style.scss";

const Paginator = () => {
  const [limit] = useState(12);
  const [skipt, setSkipt] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postsReducer);

  //LLAMADO PARA LA PAGINACION
  useEffect(() => {
    skipt !== null && dispatch(getPost(limit, skipt))
  }, [skipt,limit]);

  const handlePreviousClick = (e) => {
    if (page === 1) return;
    setSkipt(skipt - limit);
    setPage(page - 1);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    if (page === postState.pages) return;
    setSkipt(skipt + limit);
    setPage(page + 1);
  };

  return (
    <div className="paginator">
      <button
        type="button"
        className="paginator-back"
        onClick={handlePreviousClick}
      >
        <i className="fas fa-angle-left fa-lg"></i>
      </button>
      <span className="paginator-page">
        {" "}
        {page} DE {postState.pages}
      </span>
      <button
        type="button"
        className="paginator-next"
        onClick={handleNextClick}
      >
        <i className="fas fa-angle-right fa-lg" />
      </button>
    </div>
  );
};

export default Paginator;
