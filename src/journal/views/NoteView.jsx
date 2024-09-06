import { useEffect, useMemo } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
const dispatch = useDispatch();
const {active:note} = useSelector(state =>state.journal)
const {body,title,date,onInputChange,formState} =useForm(note);

const dateString = useMemo(()=>{
    const newDate = new Date(date);
    return newDate.toUTCString();
},[date])

useEffect(() => {
  dispatch( setActiveNote(formState) );
}, [formState])


const onSaveNote=()=>{
dispatch( startSaveNote() );
}

  return (
    <Grid container direction='row' justifyContent='space-between'
    sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}} onClick={onSaveNote}>
                <SaveOutlined sx={{fontSize:30,mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            sx={{border:'none',mb:1}}
            name="title"
            value={title}
            onChange={onInputChange}

            />
            <TextField
            multiline
            type="text"
            variant="filled"
            fullWidth
            placeholder="¿Que sucedio el dia de hoy?"
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
            />
        </Grid>
        {/*Image Gallery*/}
        <ImageGallery/>

    </Grid>
  )
}
