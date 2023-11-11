import React from "react";
import "./Bookmark.css";

const Bookmarks = ({ min, bookmark }) => {
  return (
    <div className="sticky top-0">
      <div className="p-5 border border-[#6047EC] bg-[#6047EC]/[.10] rounded-md">
        <p className="text-[#6047EC] font-bold text-lg md:text-xl">
          Spent time on read: {min} min
        </p>
      </div>
      {/* Book Marks */}
      {bookmark.length === 0 ? (
        ""
      ) : (
        <div className="my-5 text-[#111111] p-5 border bg-[#6047EC]/[.10] rounded-md">
          <p className="mb-3 font-bold text-md md:text-xl">
            Bookmarked Blogs : {bookmark.length}
          </p>
          {/* Bookmark Items */}
          <div>
            {bookmark.map((boomarkItem) => (
              <Bookmark
                key={boomarkItem.id}
                boomarkItem={boomarkItem}
              ></Bookmark>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Bookmark = ({ boomarkItem }) => {
  return (
    <div className="p-3 bg-white rounded-md bookmark-item">
      <p className="font-semibold text-md md:text-lg">{boomarkItem.title}</p>
    </div>
  );
};

export default Bookmarks;
