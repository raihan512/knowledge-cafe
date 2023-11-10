import React, { useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";

const Content = () => {
  const [min, setMin] = useState(0);
  const calculateMin = (time) => {
    setMin(min + time);
  };

  return (
    <div className="grid grid-cols-6 gap-10 my-5">
      <div className="col-span-4">
        <Blogs calculateMin={calculateMin}></Blogs>
      </div>
      <div className="col-span-2">
        <Bookmarks min={min}></Bookmarks>
      </div>
    </div>
  );
};

export default Content;
