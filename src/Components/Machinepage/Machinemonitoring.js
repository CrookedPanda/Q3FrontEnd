import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Graph from './Machinegraph';
import {LinkContainer} from 'react-router-bootstrap'
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

function Machinemonitoring() {
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
          {MachinesGets.map(MachinesGet => (
          <LinkContainer to='/Machinecomp'>
          <div key={MachinesGet} style= {{height: "px" ,width: "200px", border: '3px solid red'}}>
          <h6 style={{textAlign: 'center'}}>{MachinesGet.name}</h6>
          <Graph data ={MachinesGet.uptimes}/>
        </div>
        </LinkContainer>
          ))}
          </Slider>
        </Box>
    </div>
  );
}

const MachinesGets =
        [
            {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
                  name: "E3",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
               
                  name: "E5",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                  {
                      startTime: "0:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "1:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "1:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "2:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                    startTime: "2:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "3:30",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "4:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "4:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "5:00",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "5:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "6:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "7:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "7:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "8:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "9:00",
            Uptime: 30,
            Downtime: 0
            },  
            {
              startTime: "9:30",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "10:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "10:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "11:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "12:30",
            Uptime: 30,
            Downtime: 0 
          },
          {
            startTime: "13:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "13:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "14:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "14:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "15:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "15:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "16:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "17:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "18:00",
          Uptime: 30,
          Downtime: 0
          },          
          {
            startTime: "18:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "19:00",
            Uptime: 30,
            Downtime: 0
        },
        {
          startTime: "19:30",
          Uptime: 30,
          Downtime: 0
        },
          {
            startTime: "20:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "20:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "21:30",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:00",
            Uptime: 30,
            Downtime: 0
          },
          {
            startTime: "22:30",
            Uptime: 30,
            Downtime: 0
          },
          {
          startTime: "23:00",
          Uptime: 30,
          Downtime: 0
          },
          {
            startTime: "23:30",
            Uptime: 30,
            Downtime: 0
          },
          {
                startTime: "24:00",
                Uptime: 30,
                  Downtime: 0
          }
                  
          ],
                },
                {
                  name: "E3",
                  components:[
                    "245, 0",
                    "292, 0",
                    "291, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 267",
                    "271, 267",
                    "271, 267",
                    "270, 269",
                    "291, 290",
                    "245, 267",
                    "292, 290",
                    "245, 241",
                    "291, 290",
                    "292, 290",
                    "245, 277",
                    "608, 606",
                    "292, 290",
                    "291, 290",
                    "608, 290"
                ],
                uptimes:[
                    {
                        startTime: "0:30",
                        Uptime: 30,
                        Downtime: 0
                    },
                    {
                      startTime: "1:00",
                      Uptime: 30,
                      Downtime: 0
                    },
                    {
                      startTime: "1:30",
                      Uptime: 30,
                      Downtime: 0
                    },
                    {
                      startTime: "2:00",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                      startTime: "2:30",
                      Uptime: 30,
                      Downtime: 0
                    },
                    {
                      startTime: "3:00",
                      Uptime: 30,
                      Downtime: 0
                    },
                    {
                      startTime: "3:30",
                      Uptime: 30,
                      Downtime: 0
                  },
                  {
                    startTime: "4:00",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "4:30",
                    Uptime: 30,
                    Downtime: 0
                  },
                  {
                    startTime: "5:00",
                    Uptime: 30,
                    Downtime: 0
                },
                {
                  startTime: "5:30",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "6:00",
                  Uptime: 30,
                  Downtime: 0
                },
                {
                  startTime: "6:30",
                  Uptime: 30,
                  Downtime: 0
              },
              {
                startTime: "7:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "7:30",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "8:00",
                Uptime: 30,
                Downtime: 0
              },
              {
                startTime: "8:30",
                Uptime: 30,
                Downtime: 0
              },
              {
              startTime: "9:00",
              Uptime: 30,
              Downtime: 0
              },  
              {
                startTime: "9:30",
                Uptime: 30,
                Downtime: 0
            },
            {
              startTime: "10:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "10:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "11:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "11:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "12:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "12:30",
              Uptime: 30,
              Downtime: 0 
            },
            {
              startTime: "13:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "13:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "14:00",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "14:30",
            Uptime: 30,
            Downtime: 0
          },
            {
              startTime: "15:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "15:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "16:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "16:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "17:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "17:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "18:00",
            Uptime: 30,
            Downtime: 0
            },          
            {
              startTime: "18:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "19:00",
              Uptime: 30,
              Downtime: 0
          },
          {
            startTime: "19:30",
            Uptime: 30,
            Downtime: 0
          },
            {
              startTime: "20:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "20:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "21:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "21:30",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "22:00",
              Uptime: 30,
              Downtime: 0
            },
            {
              startTime: "22:30",
              Uptime: 30,
              Downtime: 0
            },
            {
            startTime: "23:00",
            Uptime: 30,
            Downtime: 0
            },
            {
              startTime: "23:30",
              Uptime: 30,
              Downtime: 0
            },
            {
                  startTime: "24:00",
                  Uptime: 30,
                    Downtime: 0
            }
                    
            ],
          },
                
                       
        ]

export default Machinemonitoring;