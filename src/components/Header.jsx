import React from "react";
import wave from "../assets/blue-wave.svg";
import profile from "../assets/profile.jpg";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Header() {
  return (
    <div>
      <img
        src={wave}
        alt="wave"
        className="absolute z-[-10] h-[100vh] w-full object-cover"
      />

      <navbar className="flex w-full justify-center items-center text-white text-2xl">
        <ul className="flex justify-between items-center w-[50%] mt-6">
          <li>Contact</li>
          <li>Projects</li>
          <li className="flex justify-center items-center w-[140px] bg-[#51bdf3]/75 rounded-l cursor-pointer">
            <a href="../assets/resume.pdf">Resume</a>
            <AiOutlineCloudDownload className="flex justify-center items-center mt-1 ml-4" />
          </li>
        </ul>
      </navbar>
      <div className="flex justify-between items-center gap-10 h-[800px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className=" text-white flex justify-center items-center">
            <h3 className="font-bold text-3xl ml-[10rem]">Hi, I'm Anubhab!</h3>
          </div>
          <div className=" text-white flex justify-center items-center">
            <h2 className="font-bold text-3xl ml-[10rem]">
              Student | React | Tailwind | Solidity
            </h2>
          </div>
        </div>
        <div className="overflow-clip relative rounded-2xl mr-[10rem] w-[650px] h-[450px] shadow-lg shadow-emerald-700 ">
          <div className="bg-[#8728d8] h-full w-full opacity-30 z-[-10] absolute ">
            <div className=" z-[-10] h-[250px] w-[250px] left-[-100px] top-[-50px] absolute rounded-full m-[5px] blur-2xl bg-pink-400 "></div>
            <div className=" z-[-10] h-[450px] w-[250px] rotate-45 absolute rounded-full top-[120px] bottom-[-100px] left-[450px] blur-2xl bg-violet-400 "></div>
          </div>
          <div className="text-white flex justify-center items-center gap-[100px] mt-5">
            <div className="flex justify-center items-center bg-red-500/70 gap-2 rounded-xl w-[120px] h-[40px] hover:bg-red-500/100 cursor-pointer duration-100 ease-in">
              <SiGmail className="text-xl " />
              <h4>GMAIL</h4>
            </div>
            <div className="flex justify-center items-center bg-gray-900/80 gap-2 rounded-xl w-[120px] h-[40px] hover:bg-black/100 cursor-pointer duration-100 ease-in">
              <BsGithub className="text-xl " />
              <h4>GITHUB</h4>
            </div>
            <div className="flex justify-center items-center bg-blue-700/70 gap-2 rounded-xl w-[120px] h-[40px] hover:bg-blue-700/100 cursor-pointer duration-100 ease-in">
              <BsLinkedin className="text-xl " />
              <h4>LINKEDIN</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
