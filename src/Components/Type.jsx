import React from "react";
import Typewriter from "react-typewriter-effect";
import "./Type.css";  

const Type = () => {
  return (
    <div className="typewriter-text">
      <Typewriter
        startDelay={100}
        cursorColor="white"
        multiText={[
          "Software Developer",
          "Full Stack Developer",
          "Problem Solver"
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
        deleteSpeed={50}
        loop={true}
      />
    </div>
  );
};

export default Type;
