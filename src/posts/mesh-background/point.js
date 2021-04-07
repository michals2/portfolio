import React, { useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import Canvas from "./canvas"

const Point = ({ amplitude, frequency }) => {
  const { clock } = useThree()

  const [height, setHeight] = useState(0)

  useFrame(() => {
    setHeight((amplitude / 2) * Math.sin(frequency * clock.elapsedTime))
  })

  return (
    <mesh position={[0, height, 0]}>
      <sphereBufferGeometry args={[2, 16, 16]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

const PointCanvas = () => {
  const [amplitude, setAmplitude] = useState(30)
  const [frequency, setFrequency] = useState(2)

  const props = { amplitude, frequency }

  return (
    <>
      <div>
        <input
          type="range"
          id="amplitude"
          min="0"
          max="100"
          value={amplitude}
          onChange={e => setAmplitude(e.target.value)}
        />
        <label htmlFor="amplitude">Amplitude</label>
      </div>
      <div>
        <input
          type="range"
          id="frequency"
          min="0"
          max="20"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
        />
        <label htmlFor="frequency">Frequency</label>
      </div>
      <Canvas>
        <Point {...props} />
      </Canvas>
    </>
  )
}

export default PointCanvas
