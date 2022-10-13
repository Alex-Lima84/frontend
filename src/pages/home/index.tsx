import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="home-page-container">
      <div className="posts">
        {posts.map((post: any) => (
          <div className="post" key={post.id}>
            <div className="post-image-container">
              <img src={post.img} alt="" />
            </div>
            <div className="content-container">
              <Link className="post-link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
