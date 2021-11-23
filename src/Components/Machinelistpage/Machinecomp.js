import React, { useEffect } from "react";
import Graph from './Machinegraph';
import List from './Machinelist';
import Grid from '@mui/material/Grid';
//import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedMachine } from "../../Redux/Actions/MachineActions";
import axios from "axios";

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

const Machinecomp =() => {
  const { name } = useParams()
  const machine = useSelector((state) => state.allMachines.machines.find(machine => machine.name === name))
  console.log(name)
  console.log(machine)
  /*
  const dispatch = useDispatch
  console.log(machine)

  const getMachine = async () => {
    const response = await axios.get(`https://localhost:44374/api/Poorten/Poortnaam/${machinename}`)
    .catch((err) => {
      console.log("err", err);
    });
    dispatch(selectedMachine(response.data));
  }
  */
    return(
        <div style={{ color: '#D3E2EA',height: '75%',}}>
            <Grid container spacing={30}>
            <Grid item xs={9}>
                <Item><Graph data ={machine}/></Item>
            </Grid>
             <Grid item xs={3}>
                <Item2><List data ={machine}/></Item2>
            </Grid>
            </Grid>
        </div>
    );
}

export default Machinecomp