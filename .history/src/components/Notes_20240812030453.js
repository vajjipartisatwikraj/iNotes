import React, { useContext } from "react";
import noteContext from "../contexts/noteContext";

function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <div>
      <div>
        {notes.map((note) => {
          return note.title;
        })}
      </div>
    </div>
  );
}

export default Notes;
