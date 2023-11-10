import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ calculateMin, blogs, handleBookMark, bookmark }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          calculateMin={calculateMin}
          handleBookMark={handleBookMark}
          bookmark={bookmark}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
