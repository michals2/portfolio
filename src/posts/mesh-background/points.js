import React, { useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import Canvas from "./canvas"

const Point = ({ amplitude, frequency, position }) => {
  const { clock } = useThree()

  const [height, setHeight] = useState(0)

  useFrame(() => {
    setHeight(
      (amplitude / 2) *
        Math.sin(frequency * clock.elapsedTime + position * 0.1)
    )
  })

  return (
    <mesh position={[position, height, 0]}>
      <sphereBufferGeometry args={[2, 16, 16]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

const PointCanvas = () => {
  const props = { amplitude: 30, frequency: 2 }
  return (
    <Canvas>
      <Point {...props} position={0} position={0} />
      <Point {...props} position={0} position={10} />
      <Point {...props} position={0} position={20} />
      <Point {...props} position={0} position={30} />
      <Point {...props} position={0} position={40} />
    </Canvas>
  )
}

export default PointCanvas
