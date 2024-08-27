import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between'
    sx={{mb:1}}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'>28 de agosto 2024</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
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
            />
            <TextField
            multiline
            type="text"
            variant="filled"
            fullWidth
            placeholder="¿Que sucedio el dia de hoy?"
            minRows={5}
            />
        </Grid>
        {/*Image Gallery*/}
        <ImageGallery/>

    </Grid>
  )
}
