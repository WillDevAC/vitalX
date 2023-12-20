import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center h-14 md:justify-between md:pl-60 bg-zinc-800">
        <img
          src="logo.png"
          alt="Website Logo VitalX"
          className="max-w-36"
        />
      </div>
    </>
  );
};

export default Header;