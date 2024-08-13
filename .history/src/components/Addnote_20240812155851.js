import React, {useContext, useState} from 'react';
//import Notes from './Notes';
import { Link } from "react-router-dom";
import noteContext from "../contexts/noteContext";


function Addnote() {

  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: '', description: '', tag: ""})
  const handleClick=()=>{

  }

  const onChange=(e)=>{
    setNote({...note, [e.target.name]:e.target.value})

  }
  
  return (
    <div>
      <div className='container my-5'>
        <h2 className="Home-heading my-4 ">Add a Note</h2>
        <div className="input-group input-group-lg my-4">
          <span className="input-group-text" id="inputGroup-sizing-lg ">Title</span>
          <input id="title" name="title" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={onChange}/>
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Description</span>
          <textarea id="description" name="description" className="form-control" aria-label="With textarea" onChange={onChange}></textarea>
        </div>
        <div className="input-group mb-3 my-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Tags</span>
          <input id="tag" name="tag" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary my-3"><Link className="nav-link"  to="/" onClick={handleClick}>Add Note</Link></button>
        <h3 className="Home-heading my-4 ">Your Notes</h3>
      </div>
    </div>
  )
}

export default Addnote
