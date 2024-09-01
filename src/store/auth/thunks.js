import { registerUserWithEmailPassword, singInWithGoogle,loginWithEmailPassword } from '../../firebase/providers';
import {chekingCredentials, login, logout} from './authSlice';

export const chekingAuthentication = (email,password)=>{

    return async(dispatch )=>{
      dispatch(chekingCredentials())
    }
}

export const startGoogleSignIn = ()=>{

    return async(dispatch) =>{
        dispatch(chekingCredentials());
        const result = await singInWithGoogle();
     if(!result.ok)  return dispatch(logout(result.errorMessage));
     dispatch(login(result));
    }

}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) =>{
    return async(dispatch) =>{
    dispatch(chekingCredentials());
    const {ok,uid,photoURL,errorMessage} =  await registerUserWithEmailPassword({email,password,displayName});

if(!ok ) return dispatch(logout({errorMessage}));
        dispatch(login({uid,displayName,email,photoURL}));
    }
}

export const startLoginWithEmailPassword = ({email,password}) =>{
    return async(dispatch) =>{
        dispatch(chekingCredentials());
        const result = await loginWithEmailPassword({email,password});
        const {ok,uid,photoURL,displayName,errorMessage}= result.user;
        if(!ok ) return dispatch(logout({result}));
        dispatch(login(result));
    }
}



