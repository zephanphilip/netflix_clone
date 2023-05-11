import React, { useState, useEffect } from 'react'
import "./Navbar.css";
function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",handleShow);
        };
    },[]);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img className="logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=''/>
      <img className="avatar" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt=''/>
    </div>
  )
}

export default Navbar
