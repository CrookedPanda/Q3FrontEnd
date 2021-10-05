import React from "react";
import GraphoftheWeek from "./GraphoftheWeek";
import HistoryoftheComponents from "./HistoryoftheComponents";
import ListOfComponents from "./ListOfComponents";
import TotalActions from "./TotalActions";
import '../../Css/Componentpage/Componentpage.css' ; 
import {useState} from "react";

function ComponentPage() {
  const [Components, SetComponents] = useState([
    {id:'1' ,Name: 'component1', previousmachine: 'machine1'},
    {Name: 'component1', previousmachine: 'machine1'},
    {Name: 'component2', previousmachine: 'machine2'},
    {Name: 'component3', previousmachine: 'machine3'},
    {Name: 'component4', previousmachine: 'machine4'},
    {Name: 'component5', previousmachine: 'machine5'},
  ]);
  return (
    <div className='row, body'>
      <><ListOfComponents/></>
      <><TotalActions /> <GraphoftheWeek /><HistoryoftheComponents /></>
    </div>
  );
}

export default ComponentPage;
