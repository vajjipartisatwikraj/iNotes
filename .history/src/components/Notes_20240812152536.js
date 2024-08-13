import React, { useContext } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem'
import Addnote from "./Addnote";
function Notes() {

  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <div>
      <Addnote>
      <div className=" row my-3">
        {notes.map((note) => {
          return <Noteitem note = {note} />
        })}
      </div>
      </Addnote>
    </div>
  );
}

export default Notes;
