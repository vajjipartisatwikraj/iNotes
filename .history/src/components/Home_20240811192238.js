import React from 'react'

const Home = () => {
  return (
    <>
    <div className='container my-3'>
      <h1 className="Home-heading text-center my-5 ">Add a Note</h1>
      <div class="input-group input-group-lg ">
        <span class="input-group-text" id="inputGroup-sizing-lg ">Title</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
      </div>
      <div class="input-group mb-3 my-5">
        <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div class="input-group mb-3 my-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Tags</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <button type="submit" className="btn btn-primary my-3"><Link className="nav-link"  to="/">Submit</Link></button>

    </div>
    </>
  )
}

export default Home
