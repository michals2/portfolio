import React from "react";
import { Canvas, useFrame, ReactThreeFiber } from "react-three-fiber";
import * as THREE from "three";
import starfield from "../images/starfield.jpg";
import earth from "../images/earth-1k.jpg";
import Controls from "./three-helpers/Controls";
import GridHelper from "./three-helpers/GridHelper";

const loader = new THREE.TextureLoader();

const Triangle = ({ vertices }) => {
  const f32array = React.useMemo(
    () =>
      Float32Array.from(
        new Array(vertices.length)
          .fill()
          .flatMap((item, index) => vertices[index].toArray())
      ),
    [vertices]
  );

  return (
    <mesh position={[0, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          args={[f32array, 3]}
        />
      </bufferGeometry>
      <meshBasicMaterial
        attach="material"
        color="#5243aa"
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const TriangleBackground = () => {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 50, 50] }}
      // onCreated={({ gl }) => gl.setClearColor("#f0f0f0")}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Triangle
        vertices={[
          new THREE.Vector3(0, 20, 0),
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(20, 0, 0),
        ]}
      />
      <Controls />
      <GridHelper />
    </Canvas>
  );
};

export default TriangleBackground;
