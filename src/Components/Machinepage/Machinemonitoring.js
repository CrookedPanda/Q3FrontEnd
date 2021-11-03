import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Graph from './Machinegraph';
//import { CardHeader,Card,CardContent} from '@mui/material';


const settings = {
  infinite: true,
  slidesToShow: 4,
  speed: 10,
  rows: 4,
  slidesToshow: 1,
};

function Machinemonitoring() {
  return (
    <div style={{color: '#D3E2EA',height: '997px',}}>
      <Box  sx={{
        height: '997px',
        width: 'auto',
        backgroundColor: '#2B2B34',
        marginLeft: '10%',
        marginRight: '10%',
      }}>
          <Slider {...settings}>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade1</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade</h6>
            <Graph/>
          </div>
          <div style= {{width: "100px", border: '3px solid red'}}>
            <h6 style={{textAlign: 'center'}}>Sawblade20</h6>
            <Graph/>
          </div>
          </Slider>
        </Box>
    </div>
  );
}

export default Machinemonitoring;