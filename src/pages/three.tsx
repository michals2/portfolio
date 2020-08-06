import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "react-three-fiber";
import * as THREE from "three";
import { ReactThreeFiber } from "react-three-fiber";

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
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!mesh?.current?.rotation) return;
    mesh.current.rotation.x = mesh.current.rotation.y += 0.03;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

const Three = () => (
  <Canvas style={{ height: "100vh" }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);

export default Three;
