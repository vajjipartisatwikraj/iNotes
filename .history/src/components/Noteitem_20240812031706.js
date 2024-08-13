import React from 'react';

const Noteitem = (props)=>{

  const {note} = props
  return (
    <div>
      {note.title}
      {note.description}
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Noteitem
