import React from "react";

function TotalActions(props) {
  const {data} = props;
  return (
    <div className="body4">
      <h6 style={{color: '#D3E2EA', textAlign: 'center'}}>Total</h6>
      <h2 style={{color: '#D3E2EA', textAlign: 'center', marginTop: '8%'}}>{data} </h2>
    </div>
  );
}

export default TotalActions;
