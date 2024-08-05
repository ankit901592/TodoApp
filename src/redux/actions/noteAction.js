
//action constant
export const ADD_NOTES="add notes";
export const DELETENOTES="delete notes";


// action creators 
export const addNotes=(text)=>({
    type:ADD_NOTES,
    text
})
 export const DeleteNotes=(index)=>({
type:DELETENOTES,
index
})