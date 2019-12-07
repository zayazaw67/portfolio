import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from "react-scroll";
import './navbar.css';

const Navbar = (props) => {
  return (
    <div>
      <Nav className="navbar justify-content-center">
        <Link className="navContent" to='portfolio' duration={1000} smooth={true}>Portfolio</Link> 
        <Link className="navContent" to='bio' duration={1200} offset={-200} smooth={true}>About Me</Link> 
        <Link className="navContent" to='tech' duration={1200} offset={-200} smooth={true}>Skills</Link> 

      </Nav>
    </div>
  );
}

export default Navbar;