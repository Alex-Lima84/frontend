import "./styles.scss";
import websiteLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={websiteLogo} alt="website logo" />
          </Link>
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
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )}
          <span className="nav-write-container">
            <Link to="write-post">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
