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
    return(
    <div>
    <h5>{data.name}</h5>
    <BarChart
    width={1500}
    height={750}
    data={data.uptime}
    barCategoryGap="0%"
    barSize = "30px"
    margin={{
      top: 10,
      bottom: 5,
      left: -15,
      right: 15
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="startTime" />
    <YAxis type="number" domain={[0, 30]}  />
    <Tooltip />
    <Legend />
    <Bar dataKey="uptime" stackId="a" fill="#369E32" />
    <Bar dataKey="downtime" stackId="a" fill="#D23333" />
  </BarChart>
        </div>
    )
}
export default Machinegraph