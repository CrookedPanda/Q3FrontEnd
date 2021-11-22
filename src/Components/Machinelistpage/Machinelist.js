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

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: '#D3E2EA',
    backgroundColor: '#24242C',
    fontcolor: "#D3E2EA"
  }));

function Machinelist(machine) {
  const {data} = machine;
    return (
        <TableContainer Component={Item}>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#D3E2EA'}}>Component Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.components.map((component) => (
              <TableRow
                key={component}
              >
                <TableCell style={{color: '#D3E2EA', }} align="middle">{component}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )

}
export default Machinelist