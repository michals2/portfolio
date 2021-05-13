import React from "react"
import data from "./world-population-data.json"
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts"

const Population = () => {
  return (
    <div>
      <LineChart width={500} height={300} data={data} margin={{bottom: 20}}>
        <XAxis label={{ value: "Year", dy:15 }} dataKey="year" interval={20}/>
        <YAxis label={{ value: "Population (Billions)", angle: -90 }} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="population" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Population
