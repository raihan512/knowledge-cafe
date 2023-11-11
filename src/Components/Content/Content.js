import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
import toast from "react-hot-toast";
import {
  handleDb,
  getLocalBookmark,
  handleMin,
  getSavedMin,
} from "../Database/Database";

const Content = () => {
  const [bookmark, setBookMark] = useState([]);
  const [min, setMin] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const calculateMin = (time) => {
    setMin(min + time);
    handleMin(min + time);
  };

  useEffect(() => {
    const getMin = getSavedMin();
    setMin(getMin);
  }, []);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const bookmarked = getLocalBookmark();
    let addedBooked = [];
    for (let booked in bookmarked) {
      const addedBookedItem = blogs.find(
        (blog) => blog.id === parseInt(booked)
      );
      if (addedBookedItem) {
        addedBookedItem.booked = true;
        addedBooked.push(addedBookedItem);
      }
    }
    setBookMark(addedBooked);
  }, [blogs]);

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
    handleDb(blog.id);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between mt-10">
      <div className="w-11/12 md:w-8/12 mr-5">
        <Blogs
          calculateMin={calculateMin}
          blogs={blogs}
          handleBookMark={handleBookMark}
          bookmark={bookmark}
        ></Blogs>
      </div>
      <div className="w-11/12 md:4/12 lg:w-3/12">
        <Bookmarks min={min} bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
};

export default Content;
