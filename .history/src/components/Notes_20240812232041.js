import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem';
import Addnote from "./Addnote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes, addNote } = context;

  const ref = useRef(null);

  const [note, setNote] = useState({title: "dfghj", description: "", tag: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  };

  const handleClick=(e)=>{
    //e.preventDefault();//PREVENT RELOAD OF PAGE
    addNote(note.title, note.description, note.tag);
    setNote({ etitle: "", edescription: "", etag: "" });
  }

  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value})

  }

  useEffect(() => {
    getAllNotes();
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
                <input id="etitle" name="etitle" type="text" className="form-control" onChange={onChange} value={note.title}/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputEmail1">Description</label>
                <input id="edescription" name="edescription" type="text" className="form-control" onChange={onChange} value={note.description}/>
            </div>
            <div className="form-group my-3 mx-4">
                <label htmlFor="exampleInputPassword1">Tags</label>
                <input id="etag" name="etag" type="text" className="form-control" onChange={onChange} value={note.tag}/>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        {notes.map((note) => (
          <Noteitem key={note._id} updateNote={updateNote} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
