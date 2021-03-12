import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/actions/modal";
import { getPost } from "../../../redux/actions/posts";
import { cerrarModal } from "../../../utils/modal";

import MemorieCard from "../../MemorieCard/MemorieCard";
import "./style.scss";

const NewPostModal = () => {
  const postState = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    cerrarModal(dispatch,closeModal);
    dispatch(getPost());
  };

  return (
    <div className="new-post-modal">
      <h2 className="new-post-modal-title">Memorie creada</h2>
      <MemorieCard post={postState.newPost} />
      <button
        className="new-post-modal-button"
        type="button"
        onClick={handleCloseClick}
      >
        Listo
      </button>
    </div>
  );
};

export default NewPostModal;
