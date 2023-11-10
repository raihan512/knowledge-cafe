import React from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Content = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="row-span-4">
        <Blogs></Blogs>
      </div>
      <div>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default Content;
