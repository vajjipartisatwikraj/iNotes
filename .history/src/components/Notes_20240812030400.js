import React from 'react'

function Notes() {
  return (
    <div>
      <div>
        {notes.map((note)=>{
            return note.title;
            })}
      </div>
    </div>
  )
}

export default Notes
