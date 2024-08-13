import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesIntial = [
        {
          "_id": "66b92847d73eda00858477e4",
          "user": "66b7d0944f166d46b45cec46",
          "title": "My Note1",
          "description": "This a note 1",
          "tag": "personal",
          "date": "2024-08-11T21:08:23.957Z",
          "__v": 0
        },
        {
          "_id": "66b92852d73eda0085efa8477e6",
          "user": "66b7d0944f166d46bfags45cec46",
          "title": "My Note2",
          "description": "This a note 2",
          "tag": "personal",
          "date": "2024-08-11T21:08:34.386Z",
          "__v": 0
        },
        {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
          {
            "_id": "66b92852d73eda0085efa8477e6",
            "user": "66b7d0944f166d46bfags45cec46",
            "title": "My Note2",
            "description": "This a note 2",
            "tag": "personal",
            "date": "2024-08-11T21:08:34.386Z",
            "__v": 0
          },
        
      ];


    const addNote=(title, description, tag)=>{
      let note = {
        "_id": "66b92852d73eda0085efa8477e6",
        "user": "66b7d0944f166d46bfags45cec46",
        "title": "My Note2",
        "description": "This a note 2",
        "tag": "personal",
        "date": "2024-08-11T21:08:34.386Z",
        "__v": 0
      };
      setNotes(notes.push(note))
    }

    const deleteNote=()=>{

    }

    const editNote=()=>{

    }

    const [notes, setNotes] = useState(notesIntial)

    return(
        <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState