import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home.js'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
       <Navbar></Navbar>
       <Routes>
        <Route exact path='/' element = {<Home></Home>}>
          
        </Route>
       </Routes>
      </>
    </Router>
  );
}

export default App;
