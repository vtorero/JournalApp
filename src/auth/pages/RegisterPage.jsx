import {Link as RouterLink} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography} from "@mui/material"
import {Google} from '@mui/icons-material'
import { AuthLayaout } from '../layout/AuthLayaout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const formData={
    email:'',
    password:'',
    displayName:''
  }

const formValidations ={
email:[(value)=>value.includes('@'),'El correo debe tener una @' ],
password:[(value)=>value.length>= 6,'El password debe tener 6 letras'],
displayName:[(value)=>value.length>=1,'El nombre es obligatorio']
}



export const RegisterPage = () => {

const dispatch = useDispatch();
const [formSubmitted,setFormSubmitted] = useState(false);

const {status,errorMessage} = useSelector(state =>state.auth);
const isCheckingAuthentication = useMemo(() => status ==='checking',[status]);


  const {formState,displayName,email,password,onInputChange,
        isFormValid,displayNameValid,emailValid,passwordValid} = useForm(formData,formValidations);


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState));
  }

  return (
<AuthLayaout title="Crear Cuenta">
  <h1>FormValid {isFormValid ? 'Valido':'Incorrecto'}</h1>
<form onSubmit={onSubmit}>
        <Grid container>
        <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
            fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Correo"
            type="text"
            placeholder="Correo@google.com"
            name="email"
            value={email}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
            onChange={onInputChange}
            fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            value={password}
            onChange={onInputChange}
            fullWidth/>
          </Grid>
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
          <Grid item
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

            <Grid item xs={12} sm={12}>
              <Button
              disabled={isCheckingAuthentication}
              type="submit" variant="contained" fullWidth>
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
