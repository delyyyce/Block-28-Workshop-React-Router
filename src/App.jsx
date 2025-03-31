import './App.css'
import Home from './components/Home';
import Red from './components/Red';
import Blue from './components/Blue';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to='/'>Home</Link>
          <Link to='/red'>Red</Link>
          <Link to='/blue'>Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/red' element={<Red />}/>  
            <Route path='/blue' element={<Blue />}/>  
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App