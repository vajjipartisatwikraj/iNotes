import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

  const host = 'http://localhost:5000'


    const notesIntial = [];


    const addNote= async(title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/addnotes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'applicatin/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiN2QwOTQ0ZjE2NmQ0NmI0NWNlYzQ2In0sImlhdCI6MTcyMzM2MTgzNX0.QEVDN_r1L1Mn8fZrdU2TuWa1PTbr8hQaDMSVECl3zBE'
        },
        body: JSON.stringify({title, description, tag})
      });

      console.log("Adding a new note")
      let note = {
        "_id": "66b92852d73eda0085efa477e9",
        "user": "66b7d0944f166d46bfags5cec46",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-08-11T21:08:34.386Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    const deleteNote=(_id)=>{
      console.log("Deleting the notes using id", _id)
      let newNotes = notes.filter((note)=>{return note._id!==_id})
      setNotes(newNotes)
    }

    const editNote= async(id, title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'applicatin/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiN2QwOTQ0ZjE2NmQ0NmI0NWNlYzQ2In0sImlhdCI6MTcyMzM2MTgzNX0.QEVDN_r1L1Mn8fZrdU2TuWa1PTbr8hQaDMSVECl3zBE'
        },
        body: JSON.stringify({title, description, tag})
      });

      const json = response.json();

      for( let index=0; index < notes.length; index++){
        const element = notes[index]
        if(element._id === id){
          element.title = title
          element.description = description
          element.tag = tag
        }
      }
    }

    const [notes, setNotes] = useState(notesIntial)

    return(
        <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState


