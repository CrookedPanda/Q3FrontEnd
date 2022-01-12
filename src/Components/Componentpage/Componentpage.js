import React from "react";
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import '../../Css/Componentpage/Componentpage.css' ; 
import { makeStyles } from "@material-ui/styles";
import Componentgraph from "./ComponentGraph";
import TotalActions from  "./TotalActions";
import ComponentList from "./ListComponents"
import HistoryoftheComponents from "./HistoryoftheComponents";
import FutureoftheComponents from "./FutureoftheComponents";
import ListComponents from "./ListComponents";
import {useDispatch ,useSelector } from "react-redux";
import {setComponents, selectedComponent} from "../../Redux/Actions/ComponentActions";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%"
  },
  box2: {
    height: "200%",
    width: "100%"
  },
  box3: {
    height: "100%",
    width: "80%"
  },
  totalactionsbox: {
    height: "100%",
    width: "100%"
  },
  componentlistbox: {
    height: "100%",
    width: "100%"
  },
  container: {
    height: "800px"
  },
  container2: {
    height: "950px"
  },
  innerContainer: {
    height: "50%"
  },
  item: {
    height: "50%",
    flex: 1 
  },
  item2: {
    height: "70%",
  },
});

function ComponentPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const gotcomponents = useSelector((state) => state.allcomponents.components);
  console.log(components)
  dispatch(setComponents(components));
  const component = useSelector((state) => state.allcomponents.components[0])
  dispatch(selectedComponent(component));
  const getcomponent = useSelector((state) => state.component)

  return (
    <div style={{ width: '90%', margin: "auto" }}>
    <Grid spacing={4} className={classes.container} container>
      <Grid xs={9} item>
        <Grid
          spacing={4}
          className={classes.container}
          container
        >
          <Grid xs={12} className={classes.item2} item2>
            <Box className={classes.box} bgcolor="#24242C" >
            <h1 style ={{ color : "#D3E2EA",textAlign:"center"}}>{getcomponent.Name}</h1>
              <Componentgraph data ={getcomponent}/>
            </Box>
          </Grid>
          <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  >
              <HistoryoftheComponents data ={getcomponent.HistoryActions}/>
              </Box>
            </Grid>
            <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  >
              <FutureoftheComponents data ={getcomponent.PlannedActions}/>
              </Box>
            </Grid>
        </Grid>
      </Grid>
      <Grid xs={3} item>
        <Grid
          spacing={4}
          direction="column"
          className={classes.container2}
          container
        >
          <Grid style={{height:"200px"}} className={classes.item2} item>
            <Box className={classes.box3} bgcolor="#24242C"  >
              <TotalActions data ={getcomponent.TotalActions}/>
            </Box>
          </Grid>
          <Grid style={{height:"720px"}} className={classes.item} item>
            <Box className={classes.box3} bgcolor="#24242C" >
             <ListComponents data ={components}/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}


const components = [
  {
    Name:"31005",
    TotalActions:"8377 Actions",
    Actions:[
      {
        week:"week1",
        actions:1953
      },
      {
        week:"week2",
        actions:6176
      },
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      }
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-2022 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-2022 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2022 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2022 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2022 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-2022 10:31"
      },
    ]
  },
  {
    Name:"41301",
    TotalActions:120717,
    Actions:[
      {
        week:"week1",
        actions:43625
      },
      {
        week:"week2",
        actions:8767
      },
      {
        week:"week3",
        actions:29616
      },
      {
        week:"week4",
        actions:33422
      },
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      }
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
    ]
  },
  {
    Name:"41202",
    TotalActions:128523,
    Actions:[
      {
        week:"week1",
        actions:31080
      },
      {
        week:"week2",
        actions:30796
      },
      {
        week:"week3",
        actions:25290
      },
      {
        week:"week4",
        actions:34210
      },
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      }
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
    ]
  },
  {
    Name:"30005",
    TotalActions:36923,
    Actions:[
      {
        week:"week1",
        actions:19950
      },
      {
        week:"week2",
        actions:0
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:14328
      },
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
    ]
  },
  {
    Name:"90200",
    TotalActions:73386,
    Actions:[
      {
        week:"week1",
        actions:39827
      },
      {
        week:"week2",
        actions:24525
      },
      {
        week:"week3",
        actions:0
      },
      {
        week:"week4",
        actions:0
      },
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
    ]
  },
  {
    Name:"41004",
    TotalActions:24657,
    Actions:[
    ],
    HistoryActions:[
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"maintance",
        Date:"29-02-2020 09:31"
      },
      {
        Type:"repair",
        Date:"29-02-2020 09:31"
      }
    ],
    PlannedActions:[
      {
      Type:"maintance",
      Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"maintance",
        Date:"29-02-20211 10:31"
      },
      {
        Type:"repair",
        Date:"29-02-20211 10:31"
      },
    ]
  },
  {
    Name:"44300",
    TotalActions:8831,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"44320",
    TotalActions:61508,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"44310",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"40004",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"31040",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"43002",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"33055",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"11032",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"41201",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"29020",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"41001",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"41003",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"40046",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"20050",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"23050",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"40002",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"90220",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"29130",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"29030",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"44202",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"29010",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"44200",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
  {
    Name:"32030",
    TotalActions:5000,
    Actions:[

    ],
    HistoryActions:[
    ],
    PlannedActions:[
    ]
  },
]

export default ComponentPage;
