import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import setToDb from "../../LocalDB/LocalDB";

const Blogs = ({ calculateMin }) => {
  const [blogs, setBlogs] = useState([]);

  const handleBookMark = (id) => {
    console.log(id);
    // setToDb();
  };

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          calculateMin={calculateMin}
          handleBookMark={handleBookMark}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
