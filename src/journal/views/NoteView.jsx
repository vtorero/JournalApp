import { useEffect, useMemo } from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from "react";

export const NoteView = () => {
const dispatch = useDispatch();
const {active:note,messageSaved,isSaving} = useSelector(state =>state.journal)
const {body,title,date,onInputChange,formState} =useForm(note);

const dateString = useMemo(()=>{
    const newDate = new Date(date);
    return newDate.toUTCString();
},[date])

const fileInputRef = useRef();

useEffect(() => {
  dispatch( setActiveNote(formState) );
}, [formState])


useEffect(() => {
if(messageSaved.length>0){
  Swal.fire('Nota actualizada',messageSaved,'success');
}
}, [messageSaved])


const onSaveNote=()=>{
dispatch( startSaveNote() );
}

const onFileInputChange = ({target})=>{
if(target.files===0) return;
console.log("subiendo archivos");
dispatch(startUploadingFiles(target.files));
//  console.log(target.files);
}

  return (
    <Grid container direction='row' justifyContent='space-between'
    sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'>{dateString}</Typography>
        </Grid>
        <Grid item>
          <input type="file" multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{display:'none'}}
          />
          <IconButton color="primary"
          disabled={isSaving}
          onClick={()=>fileInputRef.current.click()}
          >
            <UploadOutlined/>
          </IconButton>
            <Button
            disabled={isSaving}
            color="primary" sx={{padding:2}} onClick={onSaveNote}>
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
        <ImageGallery
        images = {note.imageUrls}
        />

    </Grid>
  )
}
