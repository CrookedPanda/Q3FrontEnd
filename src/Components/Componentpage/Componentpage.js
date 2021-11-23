import React from "react";
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import '../../Css/Componentpage/Componentpage.css' ; 
import { makeStyles } from "@material-ui/styles";
import Componentgraph from "./ComponentGraph";
import ComponentList from "./ListComponents"
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
              <Componentgraph/>
            </Box>
          </Grid>
          <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  />
            </Grid>
            <Grid xs={6} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C"  />
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
            <Box className={classes.totalactionsbox} bgcolor="#24242C"  />
          </Grid>
          <Grid style={{height:"600px"}} className={classes.item} item>
            <Box className={classes.box} bgcolor="#24242C" >
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}

export default ComponentPage;
