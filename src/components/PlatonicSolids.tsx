import React from "react";
import { Canvas, useFrame, ReactThreeFiber } from "react-three-fiber";
import * as THREE from "three";
import Controls from "./three-helpers/Controls";
import GridHelper from "./three-helpers/GridHelper";

/*
  Tetrahedron
  Cube
  Octahedron
  Dodecahedron
  Icosahedron
*/

function Tetrahedron() {
  const geom = new THREE.TetrahedronBufferGeometry(10, 0);
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="red" attach="material" />
    </lineSegments>
  );
}

function Cube() {
  const geom = new THREE.BoxBufferGeometry(10, 10, 10);
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="orange" attach="material" />
    </lineSegments>
  );
}

function Octahedron() {
  const geom = new THREE.OctahedronBufferGeometry(10);
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="yellow" attach="material" />
    </lineSegments>
  );
}

function Dodecahedron() {
  const geom = new THREE.DodecahedronBufferGeometry(10);
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="green" attach="material" />
    </lineSegments>
  );
}

function Icosahedron() {
  const geom = new THREE.IcosahedronBufferGeometry(10);
  return (
    <lineSegments>
      <edgesGeometry attach="geometry" args={[geom]} />
      <lineBasicMaterial color="blue" attach="material" />
    </lineSegments>
  );
}

const SolarSystem = () => {
  return (
    <Canvas camera={{ position: [0, 50, 50] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tetrahedron />
      <Cube />
      <Octahedron />
      <Dodecahedron />
      <Icosahedron />
      <Controls />
      <GridHelper />
    </Canvas>
  );
};

export default SolarSystem;
