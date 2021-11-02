import React from "react";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Graph from './Machinegraph';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '3px solid'
}));


function Machinemonitoring() {
  return (
    <div style={{backgroundColor:'#2B2B34'}}>
      <Box
      sx={{
        gridAutoRows: '210px',
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}><Graph/></Item>
      <Item sx={{ gridColumn: '2', gridRow: 'span 2' }}><Graph/></Item>
      <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}><Graph/></Item>
      <Item sx={{ gridColumn: '2', gridRow: 'span 2' }}><Graph/></Item>
      </Box>
    </div>
  );
}

export default Machinemonitoring;