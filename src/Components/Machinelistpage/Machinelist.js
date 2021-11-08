import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function createData(name, calories) {
    return { name, calories};
  }
  
  const rows = [
    createData(245, 262),
    createData(292, 159),
    createData(262, 162),
    createData(305, 645),
    createData(305, 305),
  ];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: '#D3E2EA',
    backgroundColor: '#24242C',
    fontcolor: "#D3E2EA"
  }));

function Machinelist() {
    return (
        <TableContainer Component={Item}>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Component Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell style={{fontcolor: '#D3E2EA'}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="middle">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )

}
export default Machinelist