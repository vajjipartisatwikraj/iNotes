import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

  const host = 'http://localhost:3000'


    const notesIntial = [
        {
          "_id": "66b92847d73efdda00858477e4",
          "user": "66b7d0944f166sfd46b45cec46",
          "title": "My Note1",
          "description": "This a note 1",
          "tag": "personal",
          "date": "2024-08-11T21:08:23.957Z",
          "__v": 0
        },
        {
          "_id": "66b92852d73edasf0085efa8477e6",
          "user": "66b7d0944f166dsf46bfags45cec46",
          "title": "My Note2",
          "description": "This a note 2",
          "tag": "personal",
          "date": "2024-08-11T21:08:34.386Z",
          "__v": 0
        },
        {
            "_id": "66b928sfs52d73eda0085efa8477e7",
            "user": "66b7dfsf0944f166d46bfags45cec46",
            "title": "My Note3",
            "description": "This a note 3",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b928ff52d73eda0085efa8477e8",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note4",
            "description": "This a note 4",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
      ];


    const addNote= async(title, description, tag)=>{

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'applicatin/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiN2QwOTQ0ZjE2NmQ0NmI0NWNlYzQ2In0sImlhdCI6MTcyMzM2MTgzNX0.QEVDN_r1L1Mn8fZrdU2TuWa1PTbr8hQaDMSVECl3zBE'
        },
        body: JSON.stringify(data)
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
        body: JSON.stringify(data)
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


