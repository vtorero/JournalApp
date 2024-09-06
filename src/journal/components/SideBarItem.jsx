import { useDispatch } from "react-redux";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import {TurnedInNot} from '@mui/icons-material';
import { setActiveNote, startSetActive } from "../../store/journal";

export const SideBarItem = ({title='',body,id,date,imageUrls=[]}) => {
  const dispatch =useDispatch();

  const onClickSetActive=()=>{

    dispatch(setActiveNote({title,body,id,date,imageUrls}))


  }

  return (
    <ListItem key={id} disablePadding>
    <ListItemButton onClick={onClickSetActive}>
        <ListItemIcon >
            <TurnedInNot/>
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={title}/>
            <ListItemText secondary={body}/>

        </Grid>
    </ListItemButton>
    </ListItem>
  )
}
