import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import '../../Css/Componentpage/ListOfComponents.css' ; 

function ListOfComponents() {
  return (
    <div style={{color: '#D3E2EA'}}>
      <Box  sx={{
        height: '800px',
        width: '15%',
        backgroundColor: '#24242C',
        marginRight: '10%',
        borderRadius: '12px',
        marginLeft: '1%',
        marginTop: '1%'
      }}>
          <div style= {{width: "120px", }}>
            <h6 style={{textAlign: 'center'}}>List of Components</h6>
          </div>
        </Box>
    </div>
  );
}

export default ListOfComponents;
