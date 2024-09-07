import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
name: ' journal',
initialState: {
    isSaving:false,
    messageSave:'',
    notes:[],
    active:null,
    /*active:{
        id:'abc123',
        title:'',
        body:'',
        date:123456,
        imagesUrl:[]
    }*/
    messageSaved:''
},
reducers: {
savingNote:(state)=>{
state.isSaving=true;
}
,
addNewEmptyNote: (state, action ) => {
    state.notes.push(action.payload);
    state.isSaving=false;

},
setActiveNote: (state, action ) => {
   state.active = action.payload
},
setNotes: (state, action ) => {
state.notes = action.payload
},
setSaving: (state ) => {
state.isSaving=true;
},
updateNote: (state, action ) => {
state.isSaving=false;
state.notes = state.notes.map( note => {
    if ( note.id === action.payload.id ) {
        return action.payload;
    }
    return note;
});
state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
},
deleteNoteById: (state, action ) => {

},

setPhotosToActiveNote:(state,action) =>{
state.active.imageUrls =[...state.active.imageUrls,...action.payload];
state.isSaving=false;
},
clearNotesLogout:(state)=>{
    state.isSaving=false;
    state.messageSave='';
    state.notes=[]
    state.active=null;
}

}
});
// Action creators are generated for each case reducer function
export const {
    state,
    setPhotosToActiveNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    clearNotesLogout,
    savingNote} = journalSlice.actions;