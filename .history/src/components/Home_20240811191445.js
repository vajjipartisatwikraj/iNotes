import React from 'react'

const Home = () => {
  return (
    <div className='container my-5'>
      <h1 className="login-heading text-center my-5 ">Add a Note</h1>
      <div class="input-group input-group-lg bg-dark">
        <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
      </div>
    </div>
  )
}

export default Home
