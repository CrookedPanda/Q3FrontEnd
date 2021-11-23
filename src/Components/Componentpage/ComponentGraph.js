import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function Componentgraph(machine) {
  const {data} = machine;
  return (
    <BarChart
    width={1000}
    height={400}
    data = {data}
    barCategoryGap="5%"
    barSize = "30px"
    margin={{
      top: 10,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="startTime" />
    <YAxis type="number" domain={[0, 30]} />
    <Tooltip />
    <Legend />
    <Bar dataKey="Actions" stackId="a" fill="#2088CE" />
  </BarChart>
  );
}

export default Componentgraph;