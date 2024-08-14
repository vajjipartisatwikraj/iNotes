import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

  const host = 'https://inotes-h2op.onrender.com'

    const notesIntial = [];
    const [notes, setNotes] = useState(notesIntial)

    //FETCHING NOTES using USER's auth-token
    const getAllNotes = async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });
      const json = await response.json()
      setNotes(json)
    }

    //CREATING NOTE using USER's auth-token
    const addNote= async(title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/addnotes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      const note = await response.json();
      console.log(note)
    }

    //DELETING NOTE using USER's auth-token
    const deleteNote= async(id)=>{

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });

      const json = await response.json()
      console.log(json)

      let newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }

    //UPDATING NOTES using USER's auth-token
    const editNote= async(id, title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      
      const json = await response.json()
      console.log(json)

      let newNotes = JSON.parse(JSON.stringify(notes))
      for( let index=0; index < newNotes.length; index++){
        const element = notes[index]
        if(element._id === id){
          newNotes[index].title = title
          newNotes[index].description = description
          newNotes[index].tag = tag
        }
      }
      setNotes(newNotes)
    }

    //Providing all required props to components
    return(
        <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState


