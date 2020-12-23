import React from "react"
import * as THREE from "three"
import Canvas from "./canvas"

const Triangle = ({ vertices }) => {
  const f32array = React.useMemo(
    () =>
      Float32Array.from(
        new Array(vertices.length)
          .fill()
          .flatMap((item, index) => vertices[index].toArray())
      ),
    [vertices]
  )

  const [yRotation, setYRotation] = React.useState(0)

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[0, yRotation, 0]}
      onClick={() => setYRotation(yRotation + Math.PI / 2)}
    >
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
  )
}

const TriangleBackground = () => {
  return (
    <Canvas camera={{ position: [0, 50, 50] }}>
      <Triangle
        vertices={[
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 20, 0),
          new THREE.Vector3(20, 0, 0),
        ]}
      />
    </Canvas>
  )
}

export default TriangleBackground
