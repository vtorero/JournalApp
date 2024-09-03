import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
       try {
        const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp);
        await updateProfile( FireBaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email,displayName
        }

    } catch (error) {
        //console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}

export const loginWithEmailPassword = async({email,password}) =>{

    try {
        const resp = await signInWithEmailAndPassword(FireBaseAuth,email,password);
        const {uid,photoURL,displayName} =resp.user;
        return {
            ok:true,
            uid, photoURL, email,displayName
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async()=>{
  return await FireBaseAuth.signOut();
}