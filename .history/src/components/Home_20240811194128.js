import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className='container'>
      <h1 className="Home-heading my-4 ">Add a Note</h1>
      <div class="input-group input-group-lg  my-4">
        <span class="input-group-text" id="inputGroup-sizing-lg ">Title</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
      </div>
      <div class="input-group my-3">
        <span class="input-group-text">Description</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="input-group mb-3 my-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Tags</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <button type="submit" className="btn btn-primary my-3"><Link className="nav-link"  to="/">Submit</Link></button>
      <h3 className="Home-heading my-4 ">Your Notes</h3>
    </div>
    </>
  )
}

export default Home
