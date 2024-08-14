import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home.js';
import About from './components/About.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './contexts/NoteState.js';
import { Alert } from './components/Alert.js';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500)
  }
  return (
    //Wrapping Complete components in NOTESTATE to access its props in wrapped components
    <NoteState>
      <Router>
      <>
       <Navbar></Navbar>
       <Alert alert={alert}></Alert>
       <Routes>
          <Route exact path='/' element = {<Home showAlert={showAlert} ></Home>}></Route>
          <Route exact path='/about' element = {<About></About>}></Route>
          <Route exact path='/signup' element = {<Signup showAlert={showAlert} ></Signup>}></Route>
          <Route exact path='/login' element = {<Login showAlert={showAlert} ></Login>}></Route>
       </Routes>
      </>
    </Router>
    </NoteState>
  );
}

export default App;
