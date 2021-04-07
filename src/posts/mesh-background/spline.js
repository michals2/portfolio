import React from "react"
import { useUpdate } from "react-three-fiber"
import * as THREE from "three"
import Canvas from "./canvas"

const Spline = ({ points }) => {
  const curve = React.useMemo(() => {
    const points = []
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0, 0))

    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  const ref = useUpdate(
    geo => {
      console.log({ geo })
      return geo.setFromPoints(curve.getPoints(50))
    },
    [curve]
  )

  return (
    <line geometry={curve}>
      <lineBasicMaterial attach="material" color="blue" />
    </line>
  )
}

const SplineCanvas = () => {
  return (
    <Canvas>
      <Spline
        points={[
          [-10, 0],
          [-5, 5],
          [0, 0],
          [5, -5],
          [10, 0],
        ]}
      />
    </Canvas>
  )
}

export default SplineCanvas
