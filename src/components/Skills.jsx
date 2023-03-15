import React from "react";
import wave from "../assets/green-wave.svg";

function Skills() {
  return (
    <div className="w-full h-[1080px] mt-[90px] relative">
        <div>
            <img src={wave} alt="wave" className="absolute z-[-10] h-[100vh] w-full object-cover" />
        </div>
      <h1>Hey!</h1>
    </div>
  );
}

export default Skills;
