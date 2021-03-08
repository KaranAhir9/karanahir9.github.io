import React from 'react';
import './header.styles.css';
import { Link } from "react-scroll";


export const Header = () => (
    <div className="header">
        <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
    </div>
);