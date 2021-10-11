import React from "react";
import GraphoftheWeek from "./GraphoftheWeek";
import HistoryoftheComponents from "./HistoryoftheComponents";
import ListOfComponents from "./ListOfComponents";
import TotalActions from "./TotalActions";
import '../../Css/Componentpage/Componentpage.css' ; 

function ComponentPage() {
  return (
    <div className='row, body'>
      <><ListOfComponents/></>
      <><TotalActions /> <GraphoftheWeek /><HistoryoftheComponents /></>
    </div>
  );
}

export default ComponentPage;
