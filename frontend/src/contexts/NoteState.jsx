import noteContext from "./noteContext.jsx";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // FETCHING NOTES using USER's auth-token
  const getAllNotes = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch notes')
      }
      
      const json = await response.json()
      setNotes(json)
      setError(null)
    } catch (error) {
      console.error("Error fetching notes:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // CREATING NOTE using USER's auth-token
  const addNote = async (title, description, tag) => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/notes/addnotes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      
      if (!response.ok) {
        throw new Error('Failed to add note')
      }
      
      const noteResponse = await response.json();
      
      if (noteResponse.status === 'success') {
        // Add note to state and refresh notes
        getAllNotes();
        setError(null)
      } else {
        throw new Error(noteResponse.message || 'Failed to add note')
      }
    } catch (error) {
      console.error("Error adding note:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // DELETING NOTE using USER's auth-token
  const deleteNote = async (id) => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete note')
      }
      
      const json = await response.json()
      console.log(json)
      
      // Update state by filtering out deleted note
      const newNotes = notes.filter((note) => note._id !== id)
      setNotes(newNotes)
      setError(null)
    } catch (error) {
      console.error("Error deleting note:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // UPDATING NOTES using USER's auth-token
  const editNote = async (id, title, description, tag) => {
    try {
      setLoading(true)
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update note')
      }
      
      const json = await response.json()
      
      // Create deep copy of notes array
      let newNotes = JSON.parse(JSON.stringify(notes))
      
      // Update the modified note in the state
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index]
        if (element._id === id) {
          newNotes[index].title = title
          newNotes[index].description = description
          newNotes[index].tag = tag
          break
        }
      }
      
      setNotes(newNotes)
      setError(null)
    } catch (error) {
      console.error("Error updating note:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // Providing all required props to components
  return (
    <noteContext.Provider value={{ notes, loading, error, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState


