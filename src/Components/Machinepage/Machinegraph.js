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
function Machinegraph(machine) {
  const {data} = machine;
  return (
    <BarChart
    width={300}
    height={160}
    data = {data}
    barCategoryGap="-1%"
    barSize = "30px"
    margin={{
      top: 10,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="startTime" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Uptime" stackId="a" fill="#369E32" />
    <Bar dataKey="Downtime" stackId="a" fill="#D23333" />
  </BarChart>
  );
}

export default Machinegraph;