import React from "react";
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import '../../Css/Componentpage/Componentpage.css' ; 
import { makeStyles } from "@material-ui/styles";

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
});

function ComponentPage() {
  const classes = useStyles();
  return (
    <div style={{ width: '90%', margin: "auto" }}>
    <Grid spacing={4} className={classes.container} container>
      <Grid xs={9} item>
        <Grid
          spacing={4}
          direction="column"
          className={classes.container}
          container
        >
          <Grid className={classes.item} item>
            <Box className={classes.box} bgcolor="yellow" />
          </Grid>
          <Grid
          spacing={4}
           className={classes.innerContainer} innerContainer
           >
            <Grid xs={6} item>
            <Box className={classes.box} bgcolor="blue" />
            </Grid>
            <Grid xs={6} item>
            <Box className={classes.box2} bgcolor="blue" />
            </Grid>
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
            <Box className={classes.totalactionsbox} bgcolor="blue" />
          </Grid>
          <Grid style={{height:"600px"}} className={classes.item} item>
            <Box className={classes.box} bgcolor="red" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}

export default ComponentPage;
