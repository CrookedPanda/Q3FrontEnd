import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: '#D3E2EA',
  backgroundColor: '#24242C',
  fontcolor: "#D3E2EA"
}));

function FutureoftheComponents(PlannedActions) {
  const {data} = PlannedActions;
  return (
    <TableContainer Component={Item}>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#D3E2EA'}}>Type of Action</TableCell>
              <TableCell style={{color: '#D3E2EA'}}>Date of Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((PlannedAction) => (
              <TableRow
                key={PlannedAction}
              > 
                <TableCell style={{color: '#D3E2EA', }} align="middle">{PlannedAction.Type}</TableCell>
                <TableCell style={{color: '#D3E2EA', }} align="middle">{PlannedAction.Date}</TableCell>
              </TableRow>   
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default FutureoftheComponents;