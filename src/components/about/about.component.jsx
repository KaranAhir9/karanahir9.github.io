import React from "react";
import { Element } from "react-scroll";
import './about.styles.css'
import profileImage from '../../assets/profile.jpg';
import Resume from '../../assets/Resume.pdf'

export const About = () => {

    return(
            <Element id="about" name="aboutSectionElement" className="about-grid">
            <h2 style={{ color: '#b31746', fontSize: '25px'}}>About Me</h2>
            <h1 style={{ color: 'black', fontSize:'40px', marginTop: '0'}}>Let me introduce myself.</h1>
            <img className="profile-img" src={profileImage}  alt="Avatar" height= '150px' width='150px'/>
            <h3>PROFILE</h3>
            <p className="profile-text">
            Experienced professional with 8 years of industry experience, specializing in JavaScript, HTML, CSS, and
ReactJS development. Recognized for consistently delivering project goals through technical expertise and
creative problem-solving.
            </p>
            <div className="grid-container">
                <div className="grid-item">FULLNAME:</div>
                <div style={{color: 'grey'}}
                className="grid-item">Karan Ahir</div>
                <div className="grid-item">BIRTH DATE:</div>
                <div style={{color: 'grey'}}
                className="grid-item">August 27, 1994</div>
                <div className="grid-item">CURRENT JOB:</div>
                <div style={{color: 'grey'}}
                className="grid-item">Sage, Senior Product Engineer</div>
                <div className="grid-item">WEBSITE:</div>
                <div style={{color: 'grey'}}
                className="grid-item"><a href="https://karanahir.netlify.app/" target="_blank"  rel="noreferrer" style={{textDecoration: 'none'}} >https://karanahir.netlify.app/</a></div>
                <div className="grid-item">EMAIL:</div>
                <div style={{color: 'grey'}}
                className="grid-item">karanahir271994@gmail.com</div>
                </div>  

                <a href= {Resume} download="KaranAhirResume.pdf" style={{margin: '1.5rem', border: '2px solid', borderRadius: '5px', padding:'10px'}}>Download Resume</a>    
                </Element>
        
    );
}