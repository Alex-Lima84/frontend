import "./styles.scss";
import websiteLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={websiteLogo} alt="website logo" />
        </div>
        <div className="links-container">
          <Link className="link" to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write-container">
            <Link to="write-post">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

// vídeo parou em 24:42 https://www.youtube.com/watch?v=0aPLk2e2Z3g