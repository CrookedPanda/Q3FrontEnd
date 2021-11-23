import React from "react";
<<<<<<< Updated upstream
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import '../../Css/Componentpage/TotalActions.css' ; 

function TotalActions() {
return (
  <div style={{color: '#D3E2EA'}}>
    <Box  sx={{
      height: '200px',
      width: '15%',
      backgroundColor: '#24242C',
      marginRight: '10%',
      borderRadius: '12px',
      marginLeft: '1%',
      marginTop: '1%',
      alignItems: 'center',
    }}>
        <div style= {{width: "120px"}}>
          <h2 style={{textAlign: 'center'}}>Totaal</h2>
          <h1 style={{textAlign: 'center'}}> 150.000 Actions</h1>
        </div>
      </Box>
  </div>
);
=======

function TotalActions() {
  return (
    <div style={{color: '#D3E2EA', textAlign: 'Center', }}>
      <h6>Total</h6>
      <h1 style={{marginTop: '7%'}}>150.000 Actions</h1>
    </div>
  );
>>>>>>> Stashed changes
}

export default TotalActions;
