import React, { useContext } from "react";
import noteContext from "../contexts/noteContext";
import Noteitem from './Noteitem'
import Addnote from "./Addnote";
function Notes() {

  const context = useContext(noteContext);
  const { notes} = context;

  return (
    <div>
      <Addnote></Addnote>
      <div className=" row my-3">
        {notes.map((note, index) => {
          return <Noteitem key={index} note = {note} />//INDEX REPLACE WITH NOTE:ID
        })}
      </div>
    </div>
  );
}

export default Notes;
