import React from "react";
import "./Bookmark.css";

const Bookmarks = ({ min }) => {
  return (
    <div className="sticky top-0">
      <div className="p-5 border border-[#6047EC] bg-[#6047EC]/[.10] rounded-md">
        <p className="text-[#6047EC] font-bold text-xl">
          Spent time on read: {min} min
        </p>
      </div>
      {/* Book Marks */}
      <div className="my-5 text-[#111111] p-5 border bg-[#6047EC]/[.10] rounded-md">
        <p className="mb-3 font-bold text-xl">Bookmarked Blogs : 8</p>
        {/* Bookmark Items */}
        <div>
          {/* Bookmark Item */}
          <div className="p-3 bg-white rounded-md bookmark-item">
            <p className="font-semibold text-lg">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
          {/* Bookmark Item */}
          <div className="p-3 bg-white rounded-md bookmark-item">
            <p className="font-semibold text-lg">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
          {/* Bookmark Item */}
          <div className="p-3 bg-white rounded-md bookmark-item">
            <p className="font-semibold text-lg">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
          {/* Bookmark Item */}
          <div className="p-3 bg-white rounded-md bookmark-item">
            <p className="font-semibold text-lg">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
          {/* Bookmark Item */}
          <div className="p-3 bg-white rounded-md bookmark-item">
            <p className="font-semibold text-lg">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
          {/* Bookmark Item */}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
