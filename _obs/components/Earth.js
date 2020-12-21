import React from "react";
import { Canvas, useFrame, ReactThreeFiber } from "react-three-fiber";
import * as THREE from "three";
import starfield from "../images/starfield.jpg";
import earth from "../images/earth-1k.jpg";

const loader = new THREE.TextureLoader();

function Earth() {
  const mesh = React.useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >();

  useFrame(() => {
    if (!mesh?.current?.rotation) return;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
      <meshStandardMaterial attach="material" map={loader.load(earth)} />
    </mesh>
  );
}

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
