import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home.js';
import About from './components/About.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteState from './contexts/NoteState.js';
import { Alert } from './components/Alert.js';


function App() {
  return (
    //Wrapping Complete components in NOTESTATE to access its props in wrapped components
    <NoteState>
      <Router>
      <>
       <Navbar></Navbar>
       <Alert message={"This is Home Page"}></Alert>
       <Routes>
          <Route exact path='/' element = {<Home></Home>}></Route>
          <Route exact path='/about' element = {<About></About>}></Route>
          <Route exact path='/signup' element = {<Signup></Signup>}></Route>
          <Route exact path='/login' element = {<Login></Login>}></Route>
       </Routes>
      </>
    </Router>
    </NoteState>
  );
}

export default App;
