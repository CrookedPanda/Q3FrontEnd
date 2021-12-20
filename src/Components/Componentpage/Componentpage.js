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
  innerContainer: {
    height: "50%"
  },
  item: {
    height: "50%",
    flex: 1 
  },
  item2: {
    height: "50%",
  },
});

function ComponentPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const gotcomponents = useSelector((state) => state.allcomponents.components);
  console.log(components)
  dispatch(setComponents(components));
  const component = useSelector((state) => state.allcomponents.components.find(component => component.Name == "real"))
  console.log(component)

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
              <Componentgraph data ={component}/>
            </Box>
          </Grid>
          <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  >
              <HistoryoftheComponents data ={component.HistoryActions}/>
              </Box>
            </Grid>
            <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  >
              <FutureoftheComponents data ={component.PlannedActions}/>
              </Box>
            </Grid>
        </Grid>
      </Grid>
      <Grid xs={3} item>
        <Grid
          spacing={4}
          direction="column"
          className={classes.container}
          container
        >
          <Grid style={{height:"200px"}} className={classes.item2} item>
            <Box className={classes.totalactionsbox} bgcolor="#24242C"  >
              <TotalActions/>
            </Box>
          </Grid>
          <Grid style={{height:"600px"}} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C" >
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
    Name:"real",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
    Name:"Test",
    TotalActions:5000,
    Actions:[
      {
        week:"week1",
        actions:100
      },
      {
        week:"week2",
        actions:150
      },
      {
        week:"week3",
        actions:250
      },
      {
        week:"week4",
        actions:50
      },
      {
        week:"week5",
        actions:170
      },
      {
        week:"week6",
        actions:220
      },
      {
        week:"week7",
        actions:400
      },
      {
        week:"week8",
        actions:300
      },
      {
        week:"week9",
        actions:100
      }
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
]

export default ComponentPage;
