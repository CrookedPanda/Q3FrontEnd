import React from "react";
import GraphoftheWeek from "./GraphoftheWeek";
import HistoryoftheComponents from "./HistoryoftheComponents";
import FutureoftheComponents from "./FutureoftheComponents";
import ListOfComponents from "./ListOfComponents";
import TotalActions from "./TotalActions";
import '../../Css/Componentpage/Componentpage.css' ; 

function ComponentPage() {
  return (
    <div className='row, body'>
      <><GraphoftheWeek /> <TotalActions /></>
      <><HistoryoftheComponents /> <FutureoftheComponents /></>
      <><ListOfComponents/></>
    </div>
  );
}

export default ComponentPage;
