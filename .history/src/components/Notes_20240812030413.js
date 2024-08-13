import React from 'react'

function Notes() {

    const context = useContext(noteContext);
  const { notes, setNotes} = context;
  
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
