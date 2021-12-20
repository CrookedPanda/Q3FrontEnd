import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { height, minHeight } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: '#D3E2EA',
  backgroundColor: '#24242C',
  fontcolor: "#D3E2EA"
}));

function LifepageComponents(lifepageComponents) {
  const {data} = lifepageComponents;
  return (
    <TableContainer Component={Item}>
        <Table sx={{ minWidth: 900 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#D3E2EA', fontSize: '35px', height: '100px'}}>Components</TableCell>
              <TableCell style={{color: '#D3E2EA', fontSize: '35px'}}>Actions</TableCell>
              <TableCell style={{color: '#D3E2EA'}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((lifepageComponents) =>(
              <TableRow key={lifepageComponents}> 
                <TableCell style={{color: '#D3E2EA', fontSize: '25px', height: '100px'}} align="middle">{lifepageComponents.description}</TableCell>
                <TableCell style={{color: '#D3E2EA', fontSize: '25px', height: '100px'}} align="middle">{'Action: '+lifepageComponents.totalActions+'/'+lifepageComponents.maxActions}</TableCell>
                <TableCell style={{color: '#D3E2EA', fontSize: '25px', height: '100px'}} align="middle">{"tekening"}</TableCell>
              </TableRow>   
            ))}
          </TableBody>
          <TableRow style={{color: '#D3E2EA', fontSize: '25px', height: '75px'}} text-align="center">{"Zoekbalk"}</TableRow>
        </Table>
      </TableContainer>
  );
}

export default LifepageComponents;