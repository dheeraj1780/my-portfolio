import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Energetic Sports Player",
          "Wanderlust-driven traveler",
          "MERN Stack Developer",
          "Ardent Learner",
          "Team - my Lifeline",
          "Effective Communicator",
          "Adaptable"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;