import { useSelector } from "react-redux";
import AllPostView from "../../AllPostView/AllPostView";
import Paginator from "../../Paginator/Paginator";
import PostForm from "../../PostForm/PostForm";
import ShowPostForm from "../../ShowPostForm/ShowPostForm";
import "./style.scss";

const HomeBody = () => {
  const postState = useSelector((state) => state.postsReducer);

  return (
    <main className="home-body">
      <AllPostView />
      <div className="home-body-post-form">
        <ShowPostForm />
        <PostForm />
      </div>
      {postState.pages <= 1 ? null : <Paginator />}
    </main>
  );
};

export default HomeBody;
