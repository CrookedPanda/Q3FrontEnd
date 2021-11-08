import React, { useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Graph from './Machinegraph';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from "react-redux";
import axios from "axios";
//import Machinelist from '../Axios'
//import { useLocation ,useHistory } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { CardHeader,Card,CardContent} from '@mui/material';


const settings = {
  infinite: false,
  slidesToShow: 4,
  speed: 10,
  rows: 4,
  slidesToshow: 1,
  marginRight: '100px'
};

  function Machinemonitoring( ) {
    //const [isLoading, setLoading] = useState(true);

    const machines = useSelector((state) => state.allMachines.machines);

    const getmachines = async () => {
      const response = await axios.get('https://localhost:44374/api/Poorten/machine/').catch((er) => {
        console.log("Err,err")
      });
      console.log(response)
    }

    useEffect(()=> {
      getmachines()
    },[])

   // if (isLoading) {
    //  return <div className="App">Loading...</div>;
    //}

    return (
    <div style={{color: '#D3E2EA',height: '800px',}}>
      <Box  sx={{
        height: '800px',
        width: 'auto',
        backgroundColor: '#2B2B34',
        marginLeft: '10%',
        marginRight: '10%',
      }}>
          <Slider {...settings}>
          {machines.map(machine => (
          <LinkContainer to='/Machinecomp'>
          <div key={machine} style= {{height: "px" ,width: "200px", border: '3px solid red'}}>
          <h6 style={{textAlign: 'center'}}>{machine.name}</h6>
          <Graph data ={machine.uptime}/>
        </div>
        </LinkContainer>
          ))}
          </Slider>
        </Box>
    </div>
    )
}

export default Machinemonitoring
