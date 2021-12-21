import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Componentgraph(component) {
  const {data} = component;
  return (
    <ResponsiveContainer width= "95%" height= "100%">
    <BarChart
    width={1000}
    height={400}
    data= {data.Actions}
    barCategoryGap="5%"
    barSize = "30px"
    margin={{
      bottom: 70
    }}
  >
    <XAxis dataKey="week"/>
    <YAxis type="number" domain={[0, 10000]} />
    <Tooltip />
    <Legend />
    <Bar dataKey="actions" stackId="a" fill="#2088CE" />
  </BarChart>
  </ResponsiveContainer>
  );
}

export default Componentgraph;