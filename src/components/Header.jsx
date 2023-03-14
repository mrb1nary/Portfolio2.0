import React from "react";
import wave from "../assets/wave-haikei.svg";
import profile from "../assets/profile.jpg";

function Header() {
  return (
    <div>
      <img
        src={wave}
        alt="wave"
        className="absolute z-[-10] h-[100vh] w-full object-cover"
      />

      <navbar className="flex w-full justify-center items-center text-white">
        <ul className="flex justify-between items-center w-[50%] mt-6">
          <li>Contact</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </navbar>
      <div className="flex justify-center items-center gap-10 h-[800px]">
        <div className=" text-white flex justify-center items-center">
          <h3>Hi, I'm Anubhab!</h3>
        </div>
        <div className="bg-[#8728d8] overflow-clip relative opacity-30 rounded-2xl w-[600px] h-[450px] ">
          <div className=" h-[150px] w-[150px] absolute rounded-full m-[5px] blur-2xl bg-pink-400 "></div>
          <div className=" h-[150px] w-[150px] absolute rounded-full top-[-120] bottom-0 right-10 blur-2xl bg-violet-400 "></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
