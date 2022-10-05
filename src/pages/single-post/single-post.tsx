import "./styles.scss";
import stockImage from "../../assets/images/stock-image.jpg";
import userImage from "../../assets/images/user-image.png";

export const SinglePost = () => {
  return (
    <div className="single-post-container">
      <div className="content-container">
        <img src={stockImage} />
        <div className="user-container">
          <img src={userImage} />
          <div className="info-container">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit-container">
            <img src="" />
            <img src="" />
          </div>
        </div>
      </div>
      <div className="menu-container">m</div>
    </div>
  );
};

// vídeo parou em 37:00 https://www.youtube.com/watch?v=0aPLk2e2Z3g