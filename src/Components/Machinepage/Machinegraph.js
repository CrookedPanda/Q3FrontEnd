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


const data = [
  {
    name: "0:00",
    Uptime: 20,
    Downtime: 10,
  },
  {
    name: "1:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "2:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "3:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "4:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "5:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "6:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "7:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "8:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "9:00",
    Uptime: 10,
    Downtime: 20,
  },
  {
    name: "10:00",
    Uptime: 0,
    Downtime: 30,
  },
  {
    name: "11:00",
    Uptime: 15,
    Downtime: 15,
  },
  {
    name: "12:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "13:00",
    Uptime: 25,
    Downtime: 5,
  },
  {
    name: "14:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "15:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "17:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "18:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "19:00",
    Uptime: 20,
    Downtime: 10,
  },
  {
    name: "20:00",
    Uptime: 10,
    Downtime: 20,
  },
  {
    name: "21:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "22:00",
    Uptime: 30,
    Downtime: 0,
  },
  {
    name: "23:00",
    Uptime: 30,
    Downtime: 0,
  },
];

function Machinegraph() {
  return (
    <BarChart
    width={300}
    height={160}
    data={data}
    barCategoryGap="-1%"
    barSize = "30px"
    margin={{
      top: 10,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Uptime" stackId="a" fill="#369E32" />
    <Bar dataKey="Downtime" stackId="a" fill="#D23333" />
  </BarChart>
  );
}

export default Machinegraph;