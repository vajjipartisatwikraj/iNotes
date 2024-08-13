import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import About from './components/About.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();  // Get the current location
  
  // Define paths where Navbar should not be shown
  const hideNavbarPaths = ['/login', '/signup'];
  
  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
