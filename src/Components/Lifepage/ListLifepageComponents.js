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
    <div style={{display: "flex", height: "90vh", flexDirection: "column"}}>
      <TableContainer Component={Item} style={{display: "flex", flexDirection: "column", flex: 1, overflowY: "scroll"}}>
          <Table sx={{ minWidth: 900 }} style={{display: "flex", flex: 1, flexDirection: "column"}} aria-label="simple table">
            <TableHead>
              <TableRow style={{display: "flex", marginTop: "2rem"}}>
                <TableCell style={{color: '#D3E2EA', fontSize: '35px', flex: 1}}>Components</TableCell>
                <TableCell style={{color: '#D3E2EA', fontSize: '35px', flex: 1}}>Actions</TableCell>
                <TableCell style={{color: '#D3E2EA', flex: 1}}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {data.map((lifepageComponents) => {
              let used = lifepageComponents.totalActions;
              let remaining = lifepageComponents.maxActions - lifepageComponents.totalActions;
              return (
                <TableRow key={lifepageComponents} style={{display: "flex"}}> 
                  <TableCell style={{color: '#D3E2EA', fontSize: '25px', display: "flex", flex: 1}}>{lifepageComponents.description}</TableCell>
                  <TableCell style={{color: '#D3E2EA', fontSize: '25px', display: "flex", flex: 1}} align="middle">{'Action: '+lifepageComponents.totalActions+'/'+lifepageComponents.maxActions}</TableCell>
                  <TableCell style={{color: '#D3E2EA', fontSize: '25px', display: "flex", flex: 1}} align="middle">
                    <div style={{flex: used, backgroundColor: "#D23333"}}></div>
                    <div style={{flex: remaining, backgroundColor: "#227A1E"}}></div>
                  </TableCell>
                </TableRow>   
              );
            })}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{color: '#D3E2EA', fontSize: '25px', padding: "1rem", borderColor: "white", borderWidth: 0, borderTopWidth: 1, borderStyle: "solid"}} text-align="center">{"Zoekbalk"}</div>
      </div>
  );
}

export default LifepageComponents;