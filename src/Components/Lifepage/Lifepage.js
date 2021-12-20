import React from "react";
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import {useDispatch ,useSelector } from "react-redux";
import {setComponents, } from "../../Redux/Actions/LifepageActions";
import LifepageComponents from "./ListLifepageComponents";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%"
  },
});

function Lifepage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const gotcomponents = useSelector((state) => state.allcomponents.lifepageComponents);
  dispatch(setComponents(lifepageComponents));

  return (
    <div style={{ width: '90%', margin: "auto" }}>
    <Grid>
      <Box className={classes.box} bgcolor="#24242C" >
        <LifepageComponents data ={lifepageComponents} />
      </Box>
    </Grid>
    </div>
  );
}

const lifepageComponents = [
  {
    treeview_id:"1",
    name:"blank",
    description:"A",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"2",
    name:"blank",
    description:"Ab",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"3",
    name:"blank",
    description:"Abc",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"4",
    name:"blank",
    description:"Abcd",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"5",
    name:"blank",
    description:"Abcde",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"6",
    name:"blank",
    description:"Abcdef",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"7",
    name:"blank",
    description:"Abcdefg",
    totalActions:5000,
    maxActions:15000,
  },
  {
    treeview_id:"8",
    name:"blank",
    description:"Abcdefgh",
    totalActions:5000,
    maxActions:15000,
  },
]

export default Lifepage;
