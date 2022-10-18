import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.scss";

export const Menu: any = ({ category }: any) => {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${category}`);
        setPosts(res.data);
        console.log(posts)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="menu-container">
      <h1>Other posts you may like</h1>
      {posts.map((post: any) => (
        <div className="menu-post-container" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
