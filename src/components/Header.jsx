import React from "react";
import blob from "../assets/purple-blob.svg";
import profile from "../assets/profile.jpg";
import { SiGmail, SiTailwindcss, SiSolidity, SiFirebase } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineCloudDownload, AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

function Header() {
  function handleClick(e) {
    e.preventDefault();
    if (e.target.innerText === "GMAIL") {
      window.location.href = "mailto:anubhab.techie@gmail.com";
      
    }
  }

  return (
    <div>
      <img
        src={blob}
        alt="wave"
        className="absolute z-[-10] h-[1080px] w-full object-cover"
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
      <div className="flex justify-between items-center gap-10 h-[100vh]">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className=" text-white flex justify-center items-center">
            <h3 className="font-bold text-3xl ml-[10rem]">Hi, I'm Anubhab!</h3>
          </div>
          <div className=" text-white flex flex-col justify-center items-center">
            <h2 className="font-bold text-3xl ml-[10rem]">
              Master's in Computer Applications
            </h2>
            <h2 className="font-bold text-3xl ml-[10rem] mt-5">
              Open Source Contributor
            </h2>
          </div>
        </div>
        <div className="overflow-clip relative rounded-2xl mr-[10rem] w-[700px] h-[550px] shadow-sm shadow-purple-400 backdrop-blur-sm">
          <div className="bg-[#8728d8] h-full w-full opacity-30 z-[-10] absolute">
            <div className=" z-[-10] h-[250px] w-[250px] left-[-100px] top-[-50px] absolute rounded-full m-[5px] blur-2xl bg-pink-400 "></div>
            <div className=" z-[-10] h-[450px] w-[250px] rotate-45 absolute rounded-full top-[120px] bottom-[-100px] left-[450px] blur-2xl bg-violet-400 "></div>
          </div>
          <div className="text-white flex justify-center items-center gap-[100px] mt-5">
            <div className="flex justify-center items-center bg-red-500/70 gap-2 rounded-xl w-[120px] h-[40px] hover:bg-red-500/100 cursor-pointer duration-100 ease-in">
              <SiGmail className="text-xl " />
              <h4 onClick={handleClick}>GMAIL</h4>
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
          <div className="flex flex-col justify-center items-center pt-5">
            <div className="text-white text-[40px] mt-10">Codes in</div>
            <div className="flex flex-wrap mt-5">
              <div className="flex justify-center items-center text-white text-lg m-2">
                <p className="m-2">React</p>
                <FaReact className="text-4xl text-blue-400" />
              </div>

              <div className="flex justify-center items-center text-white text-lg p-2 m-2">
                <p className="m-2">Tailwind</p>
                <SiTailwindcss className="text-4xl text-blue-500" />
              </div>

              <div className="flex justify-center items-center text-white text-lg p-2 m-2">
                <p className="m-2">Solidity</p>
                <SiSolidity className="text-4xl text-black" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-5">
            <div className="text-white text-[40px] mt-10">Knows</div>
            <div className="flex flex-wrap mt-5">
              <div className="flex justify-center items-center text-white text-lg m-2">
                <p className="m-2">Firebase</p>
                <SiFirebase className="text-4xl text-orange-400" />
              </div>

              <div className="flex justify-center items-center text-white text-lg p-2 m-2">
                <p className="m-2">Javascript</p>
                <DiJavascript1 className="text-4xl text-yellow-300" />
              </div>

              <div className="flex justify-center items-center text-white text-lg p-2 m-2">
                <p className="m-2">Git</p>
                <AiFillGithub className="text-4xl text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
