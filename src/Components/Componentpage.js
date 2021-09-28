import React from "react";
import GraphoftheWeek from "./GraphoftheWeek";
import HistoryoftheComponents from "./HistoryoftheComponents";
import ListOfComponents from "./ListOfComponents";
import TotalActions from "./TotalActions";

function ComponentPage() {
  return (
    <><ListOfComponents /><TotalActions /> <GraphoftheWeek /><HistoryoftheComponents /></>
  );
}

export default ComponentPage;
