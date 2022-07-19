import logo from './assets/images/logo-tigo.png';
import hnFlag from './assets/images/hn-flag.png'
import boFlag from './assets/images/bo-flag.png'
import svFlag from './assets/images/sv-flag.png'
import pyFlag from './assets/images/py-flag.png'
import gtFlag from './assets/images/gt-flag.png'
import './App.css';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App d-flex align-items-center">
      
        <div className="container home-container ">
          <div className="row"> 
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <img src={logo} className="img-logo" alt="tigo home logo"/>
            </div>
            <div className="col-md-6 p-4 d-flex align-items-center">
              <ul className="ul-home">
                <li className="country-li">
                  <Link to="/bo/home-bo">
                    <img className="img-flag" src={boFlag} alt="hn-flag" />
                    <span className="label-country">Bolivia</span>
                    </Link>
                </li>
                <li className="country-li">                  
                  <Link to="/sv/home-sv">
                    <img className="img-flag" src={svFlag} alt="sv-flag" />
                    <span className="label-country">El Salvador</span>
                  </Link>
                </li> 
                <li className="country-li">
                  <Link to="/gt/home-gt">
                    <img className="img-flag" src={gtFlag} alt="sv-flag" />
                    <span className="label-country">Guatemala </span>
                  </Link>
                </li>
                <li className="country-li">
                  <Link to="/hn/home-hn">
                    <img className="img-flag" src={hnFlag} alt="hn-flag" />
                     <span className="label-country">Honduras </span>
                  </Link>
                </li> 
                <li className="country-li">
                  <Link to="/py/home-py">
                    <img className="img-flag" src={pyFlag} alt="sv-flag" />
                    <span className="label-country"> Paraguay</span>
                  </Link>
                </li> 
              </ul> 
            </div>
          </div>

          {/* <span style={{color: "#fff"}}>Tigo Money Page</span>
          <br /><br />
            <ul>
              <li><Link to="/honduras/home">Honduras</Link></li> 
              <li><Link to="/bo/home-bo">Bolivia</Link></li>
              <li><Link to="/sv/home-sv">El salvador</Link></li> 
              <li><Link to="/gt/home-gt">Guatemala</Link></li>
              <li><Link to="/py/home-py">Paraguay</Link></li> 
            </ul> */}

        </div>
    </div>
  );
}

export default App;
