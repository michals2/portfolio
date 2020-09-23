import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { ReactThreeFiber } from "react-three-fiber";
import earth from "./earth-1k.jpg";

const loader = new THREE.TextureLoader();

interface EarthProps {
  position: [number, number, number];
}

function Earth(props: EarthProps) {
  const mesh = useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >();

  useFrame(() => {
    if (!mesh?.current?.rotation) return;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
      <meshStandardMaterial attach="material" map={loader.load(earth)} />
    </mesh>
  );
}

export default Earth;
