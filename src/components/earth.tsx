import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { ReactThreeFiber, useThree } from "react-three-fiber";
import earth from "./earth.jpg";
import starfield from "./starfield.jpg";

const loader = new THREE.TextureLoader();

interface BoxProps {
  position: [number, number, number];
}

function Box(props: BoxProps) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<
    ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>
  >();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
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

const Three = () => {
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
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Three;
