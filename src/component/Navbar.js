import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import germany from "../images/germany.png";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="home">
          <div className="navleft">
            <img className="germany-logo" src={germany} alt="germany" />
            <h1 className="g" >Der Die Das German App</h1>
          </div>
        </Link>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/Learning" className="Learning">
            <li>Learning</li>
          </Link>
          <Link to="/Quiz" className="Quiz">
            <li>Quiz</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
