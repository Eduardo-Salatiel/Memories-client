import { memorieDate } from "../../utils/memorieDate";
import "./style.scss";

const MemorieCard = ({ post }) => {
  return (
    <div className="memorie-card">
      <div
        className="memorie-card-image-container"
        style={{ backgroundImage: `url(${post?.image})` }}
      />
      <div className="memorie-card-info">
        <div className="memorie-card-info-description">
          <h4>{post?.title}</h4>
          <p>{post?.message}</p>
        </div>
        <div className="memorie-card-info-creator">
          <span>{post?.usuario.name}</span>
          <span>{memorieDate(post?.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default MemorieCard;
