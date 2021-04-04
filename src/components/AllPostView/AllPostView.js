import React,{ Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/posts";
import Spinner from "../commons/Spinner/Spinner";

import MemorieCard from "../MemorieCard/MemorieCard";
import "./style.scss";

const AllPostView = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <Fragment>
      {postState.searching ? (
        <Spinner />
      ) : (
        <div className="all-post-view">
          {postState.posts.map((post) => (
            <MemorieCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(AllPostView);
