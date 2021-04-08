import React, { useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import Canvas from "./canvas"

const Point = ({ amplitude, frequency, position, row }) => {
  const { clock } = useThree()

  const [height, setHeight] = useState(0)

  useFrame(() => {
    setHeight(
      (amplitude / 2) *
        Math.sin(frequency * clock.elapsedTime + position * 0.1 + row * 0.05)
    )
  })

  return (
    <mesh position={[position, height, row]}>
      <sphereBufferGeometry args={[2, 16, 16]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

const Row = ({ row }) => {
  const props = { amplitude: 30, frequency: 1, row }
  return (
    <>
      <Point {...props} position={-20} />
      <Point {...props} position={-10} />
      <Point {...props} position={0} />
      <Point {...props} position={10} />
      <Point {...props} position={20} />
    </>
  )
}

const PointCanvas = () => {
  return (
    <Canvas>
      <Row row={-20} />
      <Row row={-10} />
      <Row row={0} />
      <Row row={10} />
      <Row row={20} />
    </Canvas>
  )
}

export default PointCanvas
