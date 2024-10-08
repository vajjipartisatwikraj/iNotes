import React, {useContext} from 'react';
import noteContext from "../contexts/noteContext";

const Noteitem = (props)=>{

  const context = useContext(noteContext);
  const { deleteNote } = context;

  const {note, updateNote } = props
  return (
    <div className='col-md-3'>
      <div className="card my-1">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <div>
                <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Note Successfully", "success")}}></i>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Noteitem
