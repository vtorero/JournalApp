import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import { addNewEmptyNote,setActiveNote,savingNote ,setNotes,setSaving,updateNote,setPhotosToActiveNote} from "./";

 export const startNewNote = () =>{
    return async(dispatch,getState)=>{
        dispatch(savingNote())
        const {uid} = getState().auth;
        console.log('starNewNote',uid)

        const newNote ={
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`))
        const setDocResp = await setDoc(newDoc,newNote);

        newNote.id=newDoc.id;

        dispatch(addNewEmptyNote(newNote));

        dispatch(setActiveNote(newNote))

        //
    }
 }

 export const startLoadingNotes = () => {
    return async(dispatch,getState) =>{
        const {uid} = getState().auth;
        const {notes} =await loadNotes(uid);
        dispatch(setNotes(notes));



    }
 }

 export const startSetActive = (note) =>{
    return async(dispatch)=>{
        dispatch(setActiveNote(note));

    }
 }

 export const startSaveNote=() => {
    return async(dispatch,getState)=>{
        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFireStore ={...note};
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${note.id}`);
        const result=await setDoc(docRef,noteToFireStore,{merge:true});
        dispatch(setActiveNote(note));
        dispatch( updateNote( note ) );

    }
 }

export const startUploadingFiles = (files=[]) =>{
    return async(dispatch)=>{
        dispatch(setSaving());
        await fileUpload(files[0]);

        const fileUploadPromises=[];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises);

        console.log(photosUrls);
        dispatch(setPhotosToActiveNote(photosUrls));

    }

}