import React from 'react'

const Home = () => {
  return (
    <>
    <div className='container my-5'>
      <h1 className="Home-heading text-center my-5 ">Add a Note</h1>
      <div class="input-group input-group-lg ">
        <span class="input-group-text" id="inputGroup-sizing-lg ">Title</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
      </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
    </>
  )
}

export default Home
