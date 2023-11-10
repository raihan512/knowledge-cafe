import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
const Blog = ({ blog, calculateMin, handleBookMark, bookmark }) => {
  const { id, img, title, date, time, author, autohorImg, tags, booked } = blog;

  let isBooked;

  for (let item of bookmark) {
    isBooked = item.id === id;
  }

  return (
    <div className="py-5 border-b">
      {/* Image */}
      <img src={img} className="rounded-md" alt="" />
      {/* Summary */}
      <div className="flex justify-between items-center my-5">
        {/* Author image, name and published date */}
        <div className="flex">
          <div className="h-12 w-12 rounded-full border overflow-hidden mr-3">
            <img src={autohorImg} className="h-full" alt="" />
          </div>
          <div>
            <p className="color-[#111111]">{author}</p>
            <p className="color-[#111111] opacity-75">{date}</p>
          </div>
        </div>
        {/* Time to read and add to bookmark btn */}
        <div className="flex items-center">
          <p className="mr-2">{time} min read</p>
          <button onClick={() => handleBookMark(blog)}>
            {isBooked ? <BsBookmarkFill /> : <BsBookmark />}
            {/* <BsBookmark /> */}
          </button>
          <Toaster />
        </div>
      </div>
      {/* title and tags */}
      <div>
        <h3 className="font-bold text-2xl mb-2 color-[#111111]">{title}</h3>
        <p className="mb-10">
          <span className="mr-2 text-lg text-[#111111] opacity-75">
            #{tags[0]}
          </span>
          <span className="mr-2 text-lg text-[#111111] opacity-75">
            #{tags[1]}
          </span>
        </p>
      </div>
      {/* Mark as read buttton */}
      <button
        className="underline text-[#6047EC]"
        onClick={() => calculateMin(time)}
      >
        mark as read
      </button>
    </div>
  );
};

export default Blog;
