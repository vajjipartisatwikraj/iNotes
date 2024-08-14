import React from 'react';
import Notes from './Notes';

const Home = ({showAlert}) => {

  return (
    <div>
      <div className="container">
          <Notes showAlert={showAlert} ></Notes>
      </div>
    </div>
  )
}

export default Home
