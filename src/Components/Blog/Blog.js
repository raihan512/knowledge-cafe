import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Blog = ({ blog }) => {
  const { img, title, date, time, author, autohorImg, tags } = blog;
  return (
    <div className="py-5 border-b">
      {/* Image */}
      <img src={img} className="rounded-md" alt="" />
      {/* Summary */}
      <div className="flex justify-between items-center my-5">
        {/* Author image, name and published date */}
        <div className="flex">
          <img
            src={autohorImg}
            className="h-12 w-12 rounded-full mr-5"
            alt=""
          />
          <div>
            <p className="color-[#111111]">{author}</p>
            <p className="color-[#111111] opacity-75">{date}</p>
          </div>
        </div>
        {/* Time to read and add to bookmark btn */}
        <div className="flex items-center">
          <p className="mr-2">{time} min read</p>
          <button>
            <BsBookmark />
          </button>
        </div>
      </div>
      {/* title and tags */}
      <div>
        <h3 className="font-bold text-2xl mb-5 color-[#111111]">{title}</h3>
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
      <button className="underline text-[#6047EC]">mark as read</button>
    </div>
  );
};

export default Blog;
