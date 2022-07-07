import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span style={{color: "#fff"}}>Tigo Money Page</span>
          <br /><br />
            <ul>
              <li><Link to="/elsalvador/home">El salvador</Link></li> 
              <li><Link to="/honduras/home">Honduras</Link></li> 
              <li><Link to="/bo/home">Bolivia</Link></li> 
            </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
