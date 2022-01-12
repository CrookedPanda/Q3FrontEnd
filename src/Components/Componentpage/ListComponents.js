import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';
import {useDispatch ,useSelector } from "react-redux";
import {selectedComponent} from "../../Redux/Actions/ComponentActions";

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: '#D3E2EA',
    backgroundColor: '#24242C',
    fontcolor: "#D3E2EA"
  }));
function ListComponents(components) {
  const {data} = components;
    return (
      <List
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: "100%",
        maxHeight: "90%",
        bgcolor: '#24242C',
        color:'#D3E2EA',
        position: 'relative',
        overflow: 'auto',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <ListSubheader style ={{ color : "#D3E2EA", backgroundColor : "#212126"}} >{"Component name"}</ListSubheader>
      {data.map((component,index) => (
        <li key={`section-${component}`}>
          <ul>
          <ListItem style ={ index % 2? { background : "#212126" }:{ background : "#24242C" }}  key={`item-${component}-${component.Name}`} >
          <ListItemButton  component="a" >
                <ListItemText primary={component.Name} />
          </ListItemButton>
          </ListItem>
          </ul>
        </li>
      ))}
    </List>
    )
}
export default ListComponents