import React, {useContext} from 'react';
//import Notes from './Notes';
import { Link } from "react-router-dom";
import noteContext from "../contexts/noteContext";


function Addnote() {

  const context = useContext(noteContext);
  const { addNote } = context;
  
  return (
    <div>
      <div className='container my-5'>
        <h2 className="Home-heading my-4 ">Add a Note</h2>
        <div className="input-group input-group-lg my-4">
          <span className="input-group-text" id="inputGroup-sizing-lg ">Title</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Description</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
        <div className="input-group mb-3 my-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Tags</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <button type="submit" className="btn btn-primary my-3"><Link className="nav-link"  to="/">Add Note</Link></button>
        <h3 className="Home-heading my-4 ">Your Notes</h3>
      </div>
    </div>
  )
}

export default Addnote
