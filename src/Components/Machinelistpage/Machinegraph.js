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
        startTime: "0:30",
        Uptime: 30,
        Downtime: 0
    },
    {
      startTime: "1:00",
      Uptime: 20,
      Downtime: 10
    },
    {
      startTime: "1:30",
      Uptime: 30,
      Downtime: 0
    },
    {
      startTime: "2:00",
      Uptime: 30,
      Downtime: 0
  },
  {
      startTime: "2:30",
      Uptime: 30,
      Downtime: 0
    },
    {
      startTime: "3:00",
      Uptime: 30,
      Downtime: 0
    },
    {
      startTime: "3:30",
      Uptime: 30,
      Downtime: 0
  },
  {
    startTime: "4:00",
    Uptime: 30,
    Downtime: 0
  },
  {
    startTime: "4:30",
    Uptime: 30,
    Downtime: 0
  },
  {
    startTime: "5:00",
    Uptime: 30,
    Downtime: 0
},
{
  startTime: "5:30",
  Uptime: 30,
  Downtime: 0
},
{
  startTime: "6:00",
  Uptime: 30,
  Downtime: 0
},
{
  startTime: "6:30",
  Uptime: 30,
  Downtime: 0
},
{
startTime: "7:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "7:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "8:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "8:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "9:00",
Uptime: 30,
Downtime: 0
},  
{
startTime: "9:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "10:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "10:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "11:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "11:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "12:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "12:30",
Uptime: 30,
Downtime: 0 
},
{
startTime: "13:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "13:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "14:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "14:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "15:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "15:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "16:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "16:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "17:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "17:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "18:00",
Uptime: 30,
Downtime: 0
},          
{
startTime: "18:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "19:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "19:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "20:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "20:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "21:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "21:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "22:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "22:30",
Uptime: 30,
Downtime: 0
},
{
startTime: "23:00",
Uptime: 30,
Downtime: 0
},
{
startTime: "23:30",
Uptime: 30,
Downtime: 0
},
{
  startTime: "24:00",
  Uptime: 30,
    Downtime: 0
}
  ];


function Machinegraph() {
    return(
    <div>
    <h5>E5</h5>
    <BarChart
    width={1200}
    height={750}
    data={data}
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
        </div>
    )
}
export default Machinegraph