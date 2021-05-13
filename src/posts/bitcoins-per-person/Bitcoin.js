import React from "react"
import data from "./bitcoin-supply.json"
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts"

const Population = () => {
  return (
    <div>
      <LineChart width={500} height={300} data={data} margin={{ bottom: 20 }}>
        <XAxis label={{ value: "Date", dy: 15 }} dataKey="date" interval={10} />
        <YAxis label={{ value: "Supply (Millions)", angle: -90, dx: -10 }} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="supply" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Population
