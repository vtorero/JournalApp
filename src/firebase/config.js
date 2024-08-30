//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-b3BoH4q7RLKwyfNTC5Ewdmj7A-kLEo",
  authDomain: "react-cursos-878a5.firebaseapp.com",
  projectId: "react-cursos-878a5",
  storageBucket: "react-cursos-878a5.appspot.com",
  messagingSenderId: "61280030411",
  appId: "1:61280030411:web:047f076cc8e6228c40554e"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FirebaseDB   = getFirestore(FireBaseApp);