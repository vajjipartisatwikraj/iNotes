import React from 'react';

const Noteitem = (props)=>{

  const {note} = props
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <div className="container mx-1">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Noteitem
