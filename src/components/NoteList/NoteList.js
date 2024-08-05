import "./NoteList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteNotes } from "../../redux/actions/noteAction";
function NoteList() {
    
const notes= useSelector((state)=> state.NoteReducer.notes)
console.log(notes);

const disptach=useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>disptach(DeleteNotes(index))} className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
