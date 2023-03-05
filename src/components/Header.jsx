import React from "react";

function Header() {
  return (
    <div className="flex w-[100%] sticky justify-center items-center">
      <ul className="flex w-[100%] sticky justify-center items-center">
        <li className="m-5">About Me</li>
        <li className="m-5">Projects</li>
        <li className="m-5">Contact</li>
      </ul>
      <button className="p-2 rounded-md items-center justify-center mr-5 bg-teal-300">Resume</button>
    </div>
  );
}

export default Header;
