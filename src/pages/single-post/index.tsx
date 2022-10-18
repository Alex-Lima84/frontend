import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../../components/menu";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import moment from "moment";

import "./styles.scss";

import editLogo from "../../assets/images/edit.png";
import deleteLogo from "../../assets/images/delete.png";
import { AuthContext } from "../../context/authContext";

export const SinglePost = () => {
  const [post, setPost]: any = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-post-container">
      <div className="content-container">
        <img src={post?.img} alt="" />
        <div className="user-container">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info-container">
            <span>{post.username}</span>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit-container">
              <Link to={`/write-post?edit=2`}>
                <img src={editLogo} alt="" />
              </Link>
              <img onClick={handleDelete} src={deleteLogo} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu category={post.cat}/>
    </div>
  );
};