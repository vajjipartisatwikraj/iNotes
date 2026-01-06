import './App.css';
import Navbar from './components/Navbar.jsx';
import Home  from './components/Home.jsx';
import About from './components/About.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './contexts/NoteState.jsx';
import { Alert } from './components/Alert.jsx';
import { useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    //Wrapping Complete components in NOTESTATE to access its props in wrapped components
    <NoteState>
      <Router>
      <>
       <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
       <Routes>
          <Route exact path='/' element = {<Home></Home>}></Route>
          <Route exact path='/about' element = {<About></About>}></Route>
          <Route exact path='/signup' element = {<Signup setIsAuthenticated={setIsAuthenticated}></Signup>}></Route>
          <Route exact path='/login' element = {<Login setIsAuthenticated={setIsAuthenticated}></Login>}></Route>
       </Routes>
      </>
    </Router>
    </NoteState>
  );
}

export default App;
