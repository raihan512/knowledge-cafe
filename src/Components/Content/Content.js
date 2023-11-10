import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
import toast, { Toaster } from "react-hot-toast";

const Content = () => {
  const [bookmark, setBookMark] = useState([]);
  const [min, setMin] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const calculateMin = (time) => {
    setMin(min + time);
  };

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookMark = (blog) => {
    const booked = bookmark.find((bookItem) => bookItem.id === blog.id);
    if (!booked) {
      blog.booked = true;
      setBookMark([...bookmark, blog]);
      toast.success(`Blog id ${blog.id} has been bookmarked`);
    } else {
      blog.booked = false;
      const remain = bookmark.filter((bookItem) => bookItem.id !== blog.id);
      setBookMark(remain);
      toast.error(`Blog id ${blog.id} has been removed`);
    }
  };
  return (
    <div className="grid grid-cols-6 gap-10 my-5">
      <div className="col-span-4">
        <Blogs
          calculateMin={calculateMin}
          blogs={blogs}
          handleBookMark={handleBookMark}
          bookmark={bookmark}
        ></Blogs>
      </div>
      <div className="col-span-2">
        <Bookmarks min={min} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
};

export default Content;
