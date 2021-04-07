import React, { useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import * as THREE from "three"
import Canvas from "./canvas"

const Spline = ({ p1, p2 }) => {
  const {clock} = useThree()

  const [h1, setH1] = useState(0)
  const [h2, setH2] = useState(10)

  const curve = React.useMemo(() => {
    const points = []
    points.push(new THREE.Vector3(p1[0], h1, p1[1]))
    points.push(new THREE.Vector3(p2[0], h2, p2[1]))

    return new THREE.BufferGeometry().setFromPoints(points)
  }, [p1, p2, h1, h2])

  const maxH1 = 40
  const maxH2 = 20

  const freq1 = 2
  const freq2 = 6

  useFrame((_,delta) => {
    setH1(maxH1 * Math.sin(freq1 * clock.elapsedTime))
    setH2(maxH2 * Math.sin(freq2 * clock.elapsedTime))
  })

  return (
    <line geometry={curve}>
      <lineBasicMaterial attach="material" color="blue" />
    </line>
  )
}

const SplineCanvas = () => {
  return (
    <Canvas>
      <Spline p1={[0, 0]} p2={[10, 10]} />
    </Canvas>
  )
}

export default SplineCanvas
