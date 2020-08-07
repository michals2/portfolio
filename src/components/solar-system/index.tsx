import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import starfield from "../starfield.jpg";

const loader = new THREE.TextureLoader();

const SolarSystem = ({ children }) => {
  return (
    <Canvas
      onCreated={({ scene }) => {
        loader.load(starfield, (texture) => {
          scene.background = texture;
        });
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Box position={[0, 0, 0]} /> */}
      {children}
    </Canvas>
  );
};

export default SolarSystem;
