import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import starfield from "./starfield.jpg";
import Earth from "../earth";

const loader = new THREE.TextureLoader();

const SolarSystem = () => {
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
      <Earth />
    </Canvas>
  );
};

export default SolarSystem;
