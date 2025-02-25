import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#E3F2FD" },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          color: { value: "#64B5F6" },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
