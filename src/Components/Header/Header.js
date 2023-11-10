import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center mt-10 pb-10 border-b">
      <p className="text-2xl font-bold">Knowledge Cafe</p>
      <div className="">
        <img
          src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          className="h-14 rounded-full"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
