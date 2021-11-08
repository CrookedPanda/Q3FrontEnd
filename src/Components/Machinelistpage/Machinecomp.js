import React from "react";
import Graph from './Machinegraph';
import List from './Machinelist';
import Grid from '@mui/material/Grid';
//import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginLeft: '2%',
    textAlign: 'center',
    color: '#D3E2EA',
    backgroundColor: '#24242C',
    height: '98%'
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),

    marginRight: '1%',
    textAlign: 'center',
    color: '#D3E2EA',
    backgroundColor: '#24242C',
    height: '780px'
  }));
/*
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: 'red',
      backgroundColor: 'black',
      height: '900px'
    },
    parentPaper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 1600,
      height: '600px'
    },
    standalone: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: 150
    }
  }));
*/
function Machinecomp() {
    return(
        <div style={{ color: '#D3E2EA',height: '75%',}}>
            <Grid container spacing={30}>
            <Grid item xs={9}>
                <Item><Graph></Graph></Item>
            </Grid>
             <Grid item xs={3}>
                <Item2><List></List></Item2>
            </Grid>
            </Grid>
        </div>
    );

}

export default Machinecomp