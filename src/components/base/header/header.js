import React, { useState, useEffect } from "react";

import "./header.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Header = (props) => {

  const location = useLocation();
  const [slug,setSlug] = useState(null)
  
  useEffect(()=>{
    const url = String(location.pathname).split("/")
    const slug = "/"+url[1]+"/"+url[2];
    setSlug(slug)
    console.log('slug', slug)
  },[])

  return (
    <div className="container ">
      <div className="row masthead">
        <div className="col-2 no-padding /*d-flex align-items-center*/">
          <img
            className="masthead-image"
            src={props.logo?.url}
            alt="main images"
          />
        </div>
        <div className="col-10 ">
          <div className="row pt-4 h-100 items-container ">
            {props.menuItems?.map((item, index) => {
              return (
                <div key={index} className={slug === item.url ? "menu-item-active" : "menu-item"}>
                  <Link to={item.url}>{item.label}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
