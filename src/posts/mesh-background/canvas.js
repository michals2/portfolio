import React from "react"
import { Canvas } from "react-three-fiber"
import Controls from "./Controls"
import GridHelper from "./GridHelper"

const ExtendedCanvas = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 50, 50] }} style={{ height: 600 }}>
      <pointLight position={[10, 10, 10]} />
      <Controls />
      <GridHelper />
      {children}
    </Canvas>
  )
}

export default ExtendedCanvas
