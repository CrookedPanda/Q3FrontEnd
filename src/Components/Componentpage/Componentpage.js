import React from "react";
<<<<<<< Updated upstream
import GraphoftheWeek from "./GraphoftheWeek";
import HistoryoftheComponents from "./HistoryoftheComponents";
import FutureoftheComponents from "./FutureoftheComponents";
import ListOfComponents from "./ListOfComponents";
import TotalActions from "./TotalActions";
import '../../Css/Componentpage/Componentpage.css' ; 
=======
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Componentgraph from "./ComponentGraph";
import FutureoftheComponents from "./FutureoftheComponents";
import ComponentList from "./ListComponents"
import HistoryoftheComponents from "./HistoryoftheComponents";
import TotalActions from "./TotalActions";
import ListComponents from "./ListComponents";
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
>>>>>>> Stashed changes

function ComponentPage() {
  return (
<<<<<<< Updated upstream
    <div className='row, body'>
      <><GraphoftheWeek /> <TotalActions /></>
      <><HistoryoftheComponents /> <FutureoftheComponents /></>
      <><ListOfComponents/></>
    </div>
=======
    <div style={{ width: '90%', margin: "auto" }}>
    <Grid spacing={4} className={classes.container} container>
      <Grid xs={9} item>
        <Grid
          spacing={4}
          className={classes.container}
          container
        >
          <Grid xs={12} className={classes.item2} item2>
            <Box className={classes.box} bgcolor="#24242C">
            <Componentgraph/>
            </Box>
          </Grid>
          <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C">
            <HistoryoftheComponents/>
            </Box>
            </Grid>
            <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C">
            <FutureoftheComponents/>
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
            <Box className={classes.totalactionsbox} bgcolor="#24242C">
            <TotalActions/>
            </Box>
          </Grid>
          <Grid style={{height:"600px"}} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C" >
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
>>>>>>> Stashed changes
  );
}

export default ComponentPage;
