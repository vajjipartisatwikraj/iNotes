import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home.js';
import About from './components/About.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup'];

  return (
    <Router>
      <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
       <Navbar></Navbar>
       <Routes>
          <Route exact path='/' element = {<Home></Home>}></Route>
          <Route exact path='/about' element = {<About></About>}></Route>
          <Route exact path='/signup' element = {<Signup></Signup>}></Route>
          <Route exact path='/login' element = {<Login></Login>}></Route>
       </Routes>
      </>
    </Router>
  );
}

export default App;
