import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem';
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";

function Notes() {

  //Accessing the Imported useContext i.e, noteContext
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote} = context;

  let navigate = useNavigate();

  //
  const ref = useRef(null);
  const refClose = useRef(null)

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""})

  //using context prop - {updateNote} from noteContext
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle: currentNote.title, edescription:currentNote.description, etag: currentNote.tag})
  };

  const handleClick=(e)=>{
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag)
    //e.preventDefault();//PREVENT RELOAD OF PAGE
  }

  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value})
  }

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      getAllNotes();  //using context prop - {updateNote} from noteContext
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Addnote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit your Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputName">Title</label>
                <input id="etitle" name="etitle" type="text" className="form-control" onChange={onChange} value={note.etitle}/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input id="edescription" name="edescription" type="text" className="form-control" onChange={onChange} value={note.edescription}/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword1">Tags</label>
                <input id="etag" name="etag" type="text" className="form-control" onChange={onChange} value={note.etag}/>
            </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5 ||note.etag.length===0}  type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h3 className="Home-heading my-2 ">Your Notes</h3>
        <div className="container">
          {Array.isArray(notes) && notes.length === 0 ? "No notes to display" : null}
        </div>
        <div className="row my-3">
          {Array.isArray(notes) && notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
