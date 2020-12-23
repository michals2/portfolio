import React from "react"
import { useUpdate } from "react-three-fiber"
import * as THREE from "three"
import Canvas from "./canvas"

const Spline = ({ points }) => {
  const curve = React.useMemo(
    () => new THREE.SplineCurve(points.map(v => new THREE.Vector2(...v))),
    [points]
  )
  const ref = useUpdate(geo => geo.setFromPoints(curve.getPoints(50)), [curve])
  return (
    <line>
      <bufferGeometry attach="geometry" ref={ref} />
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
