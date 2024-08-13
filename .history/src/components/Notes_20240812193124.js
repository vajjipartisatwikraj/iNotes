import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem'
import Addnote from "./Addnote";
function Notes() {

  const context = useContext(noteContext);
  const { notes, getAllNotes} = context;


  const updateNote=(note)=>{
    ref.toggle
  }

  useEffect(()=>{
    getAllNotes()
    // eslint-disable-next-line
  },[])

  const ref =useRef(null)
  
  return (
    <div>
      <Addnote></Addnote>
      <div ref = {ref} className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" row my-3">
        {notes.map((note) => {
          return <Noteitem key = {note._id} updateNote={updateNote} note = {note} />
        })}
      </div>
    </div>
  );
}

export default Notes;
