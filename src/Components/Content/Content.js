import React from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Content = () => {
  return (
    <div className="grid grid-cols-6 gap-10 my-5">
      <div className="col-span-4">
        <Blogs></Blogs>
      </div>
      <div className="col-span-2">
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default Content;
