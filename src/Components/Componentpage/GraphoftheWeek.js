import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
//import Graph from './Machinegraph';
import '../../Css/Componentpage/GraphoftheWeek.css' ; 

const settings = {
  infinite: true,
};

function GraphoftheWeek() {
  return (
    <div style={{color: '#D3E2EA',}}>
      <Box  sx={{
        height: '500px',
        width: '75%',
        backgroundColor: '#24242C',
        marginRight: '10%',
        borderRadius: '12px',
        marginLeft: '1%',
        marginTop: '1%'
      }}>
          <Slider {...settings}>
          <div style= {{width: "120px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Name component</h6>
          </div>
          </Slider>
        </Box>
    </div>
  );
}

export default GraphoftheWeek;
