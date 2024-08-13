import React, {useContext, useState} from 'react';
import noteContext from "../contexts/noteContext";

function Addnote() {

  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const handleClick=(e)=>{
    e.preventDefault();//PREVENT RELOAD OF PAGE
    addNote(note.title, note.description, note.tag);
    console.log(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" }); // Reset the form fields
  }

  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <div className='container my-3'>
        <h2 className="Home-heading my-3 ">Add a Note</h2>
        <div className="input-group input-group-lg my-3">
          <span className="input-group-text" id="inputGroup-sizing-lg ">Title</span>
          <input id="title" name="title" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={onChange} value={note.title}/>
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Description</span>
          <textarea id="description" name="description" className="form-control" aria-label="With textarea" onChange={onChange} value={note.description}></textarea>
        </div>
        <div className="input-group mb-3 my-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Tags</span>
          <input id="tag" name="tag" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={onChange} value={note.tag}/>
        </div>
        <button disabled={note.title.length<5 || note.description.length<5 ||note.tag.length===0} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
      </div>
    </div>
  )
}

export default Addnote
