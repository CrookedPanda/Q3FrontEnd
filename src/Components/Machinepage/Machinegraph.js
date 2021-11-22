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
    <YAxis type="number" domain={[0, 30]} />
    <Tooltip />
    <Legend />
    <Bar dataKey="uptime" stackId="a" fill="#369E32" />
    <Bar dataKey="downtime" stackId="a" fill="#D23333" />
  </BarChart>
  );
}

export default Machinegraph;