import React, {useContext, useState} from 'react';
import noteContext from "../contexts/noteContext.jsx";

function Addnote() {
  const context = useContext(noteContext);
  const { addNote, loading, error } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});

  const handleClick = (e) => {
    e.preventDefault(); // PREVENT RELOAD OF PAGE
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" }); // Reset the form fields
  };

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  
  return (
    <div>
      <div className='container my-3'>
        <h2 className="Home-heading my-3">Add a Note</h2>
        
        {/* Error message */}
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleClick}>
          <div className="input-group input-group-lg my-3">
            <span className="input-group-text">Title</span>
            <input 
              id="title" 
              name="title" 
              type="text" 
              className="form-control" 
              aria-label="Title" 
              onChange={onChange} 
              value={note.title}
              minLength={5}
              required
            />
          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Description</span>
            <textarea 
              id="description" 
              name="description" 
              className="form-control" 
              aria-label="Description" 
              onChange={onChange} 
              value={note.description}
              minLength={5}
              required
            ></textarea>
          </div>
          <div className="input-group mb-3 my-3">
            <span className="input-group-text">Tags</span>
            <input 
              id="tag" 
              name="tag" 
              type="text" 
              className="form-control" 
              aria-label="Tags" 
              onChange={onChange} 
              value={note.tag}
              required
            />
          </div>
          <button 
            disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length === 0 || loading} 
            type="submit" 
            className="btn btn-primary my-3"
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Adding...
              </>
            ) : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addnote;
