import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography} from "@mui/material"
import {Google} from '@mui/icons-material'
import { AuthLayaout } from '../layout/AuthLayaout';

export const RegisterPage = () => {
  return (
<AuthLayaout title="Crear Cuenta">
<form >
        <Grid container>
        <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Correo"
            type="email"
            placeholder="Correo@google.com"
            fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth/>
          </Grid>
          <Grid container spacing={2} sx={{mb:2,mt:1}}>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth>
                Crear una cuenta
              </Button>
            </Grid>


          </Grid>
          <Grid container
          direction='row'
          justifyContent='end'>
             <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
            Ingresar
            </Link>

          </Grid>
          </Grid>
      </form>
</AuthLayaout>



  )
}
