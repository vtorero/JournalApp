import {Link as RouterLink} from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography} from "@mui/material"
import {Google} from '@mui/icons-material'
import { AuthLayaout } from '../layout/AuthLayaout';
import { useForm } from '../../hooks';
import { useDispatch,useSelector } from "react-redux";
import {chekingAuthentication,startGoogleSignIn,startLoginWithEmailPassword} from "../../store/auth";
import { useMemo} from 'react';

const formData={
    email:'',
    password:''
  }


export const LoginPage = () => {

const dispatch =useDispatch();
const {status,errorMessage} =useSelector(state =>state.auth);

const {formState,email,password,onInputChange} = useForm(formData);

const isAuthenticating = useMemo(()=>status==='cheking',[status]);

const onSubmit = (event) =>{
event.preventDefault();
console.log({email,password});
dispatch(startLoginWithEmailPassword(formState))
}

const onGoogleSignIn =() =>{

  console.log("GoogleSignIn")
  dispatch(startGoogleSignIn());
}

  return (
<AuthLayaout title="Login">
<form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate_faster">
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Correo"
            type="email"
            placeholder="Correo"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{mb:2,mt:1}}>
          <Grid item
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            <Grid item xs={12} sm={6}>
              <Button
              disabled={isAuthenticating}
              type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
              disabled={isAuthenticating}
              onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google/>
                <Typography sx={{ml:1}}>
                  Google
                </Typography>

              </Button>
            </Grid>

          </Grid>
          <Grid container
          direction='row'
          justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
            Crear una cuenta
            </Link>

          </Grid>
          </Grid>
      </form>
</AuthLayaout>



  )
}
