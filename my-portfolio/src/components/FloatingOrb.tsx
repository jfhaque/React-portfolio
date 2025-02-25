import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingOrb: React.FC = () => {
  return (
    <motion.div
      className="absolute top-[50%] right-[20%] w-32 h-32"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.2 }}
      transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#64B5F6" wireframe />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default FloatingOrb;
