import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ calculateMin }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} calculateMin={calculateMin}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
