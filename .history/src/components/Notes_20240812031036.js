import React, { useContext } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem'
function Notes() {

  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <div>
      <div>
        {notes.map((note) => {
          return <Noteitem note = {note} />
        })}
      </div>
    </div>
  );
}

export default Notes;
