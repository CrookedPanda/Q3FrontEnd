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
  fontcolor: "#D3E2EA",
  overflowX: 'auto',
  maxHeight:100
}));

function HistoryoftheComponents(HistoryActions) {
  const {data} = HistoryActions;
  return (
    <TableContainer sx={{ maxWidth: "100%" ,maxHeight:"100%" }}  Component={Item}>
        <Table sx={{ maxWidth: "100%" ,maxHeight:"100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style ={{ color : "#D3E2EA", backgroundColor : "#212126"}}>Type of Action</TableCell>
              <TableCell style ={{ color : "#D3E2EA", backgroundColor : "#212126"}}>Date of Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default HistoryoftheComponents;
