import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import MachineGraph from './Machinegraph';
import {useDispatch ,useSelector } from "react-redux";
import axios from "axios";
import {setMachines} from "../../Redux/Actions/MachineActions";
import {Link} from "react-router-dom";
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
    //const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const machines = useSelector((state) => state.allMachines.machines);

    const getmachines = async () => {
      //const response = await axios.get('https://localhost:44374/api/Poorten/machine/').catch((er) => {
      //  console.log("Err,err")
      //});
      //dispatch(setMachines(response.data));

      var dataset = [
        {
            name: "Hi",
            data: [
                {
                    startTime: "2021-12-13T12:00:00Z",
                    endTime: "2021-12-14T00:00:00Z",
                    type: "off"
                },
                {
                    startTime: "2021-12-14T00:00:00Z",
                    endTime: "2021-12-14T11:00:00Z",
                    type: "on"
                },
                {
                    startTime: "2021-12-14T11:00:00Z",
                    endTime: "2021-12-14T12:00:00Z",
                    type: "off"
                },
                {
                    startTime: "2021-12-14T12:00:00Z",
                    endTime: "2021-12-14T13:00:00Z",
                    type: "on"
                }
            ]
        }
      ];

      for (let i = 0; i < 31; i++) {
          dataset.push(dataset[0]);
      }

      dispatch(setMachines(dataset));
    }

    useEffect(()=> {
      getmachines()
    },[])

    console.log("Machines", machines)

   // if (isLoading) {
    //  return <div className="App">Loading...</div>;
    //}

    return (
        <div style={{color: '#D3E2EA'}}>
            <Box sx={{  
            backgroundColor: '#2B2B34',
            marginLeft: '10%',
            marginTop: '2%',
            marginRight: '10%' }}>
                <Slider {...settings}>
                    {machines.map(machine => (
                        <div key={machine.name}>
                            <h6 style={{textAlign: 'center'}}>{machine.name}</h6>
                            <Link to={{pathname: `/Machinecomp/${machine.name}`}} style={{display: "flex", justifyContent: "center"}}>
                                <MachineGraph items={machine.data}/>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </Box>
        </div>
    );
}

export default Machinemonitoring
