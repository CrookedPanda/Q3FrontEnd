import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '11:00',
    Tasks: 100,
  },
  {
    name: '12:00',
    Tasks: 250,
  },
  {
    name: '13:00',
    Tasks: 250,
  },
  {
    name: '14:00',
    Tasks: 400,
  },
  {
    name: '15:00',
    Tasks: 642,
  },
  {
    name: '16:00',
    Tasks: 821,
  },
  {
    name: '17:00',
    Tasks: 1013,
  },
];

function Machinegraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Tasks" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  );
}

export default Machinegraph;