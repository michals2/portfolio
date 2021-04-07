import React from "react"
import * as THREE from "three"
import Canvas from "./canvas"

const Lines = ({ length }) => {
  const pointsCoordinates = []
  const spacing = 10

  for (let i = 0; i < length; i++) {
    const pointCoordinates = [i * spacing, 0, 0]
    pointsCoordinates.push(pointCoordinates)
  }

  const curve = React.useMemo(() => {
    const points = []
    pointsCoordinates.forEach(pointCoordinates =>
      points.push(
        new THREE.Vector3(
          pointCoordinates[0],
          pointCoordinates[1],
          pointCoordinates[2]
        )
      )
    )

    return new THREE.BufferGeometry().setFromPoints(points)
  }, [pointsCoordinates])

  return (
    <line geometry={curve}>
      <lineBasicMaterial attach="material" color="blue" />
    </line>
  )
}

const LinesCanvas = () => {
  return (
    <Canvas>
      <Lines length={5} />
    </Canvas>
  )
}

export default LinesCanvas
