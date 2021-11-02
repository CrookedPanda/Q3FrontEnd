import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
//import { border } from "@mui/system";

/*
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '3px solid'
}));
*/
const settings = {
  infinite: true,
  slidesToShow: 4,
  speed: 100,
  rows: 4,
  slidesToshow: 1,
};



function Machinemonitoring() {
  return (
    <div style={{color: '#D3E2EA',height: '997px',}}>
      <Box  sx={{
        width: 'auto',
        backgroundColor: '#2B2B34',
        marginLeft: '20%',
      }}>
          <Slider {...settings}>
          <div style={{fontSize: '20px'}}>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          <div>
            <h3>Sawblade</h3>
          </div>
          </Slider>
        </Box>
    </div>
  );
}

export default Machinemonitoring;