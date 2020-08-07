import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { ReactThreeFiber } from "react-three-fiber";
import earth from "./earth.jpg";

const loader = new THREE.TextureLoader();

interface EarthProps {
  position: [number, number, number];
}

function Earth(props: EarthProps) {
  const mesh = useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >();

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (!mesh?.current?.rotation) return;
    mesh.current.rotation.y -= 0.0005;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
      <meshStandardMaterial attach="material" map={loader.load(earth)} />
    </mesh>
  );
}

export default Earth;
