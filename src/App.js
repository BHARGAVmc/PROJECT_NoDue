
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/Home/Home";
import Flogin from "../src/Login/Flogin";
import Slogin from "../src/Login/Slogin";
import Signup from '../src/Login/Signup';
import FacultyDash from './Faculty/FacultyDash';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Slogin" element={<Slogin/>}/>
        <Route path="/Flogin" element={<Flogin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/FacultyDash" element={<FacultyDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
