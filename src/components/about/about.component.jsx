import React from "react";
import { Element } from "react-scroll";
import './about.styles.css'
import profileImage from '../../assets/profile.jpg';
import Resume from '../../assets/Resume.pdf'

export const About = () => {

    return(
        // <div id="about" className="about-grid">
            <Element id="about" name="aboutSectionElement" className="about-grid">
            <h2 style={{ color: '#b31746', fontSize: '25px'}}>About Me</h2>
            <h1 style={{ color: 'black', fontSize:'40px', marginTop: '0'}}>Let me introduce myself.</h1>
            <img className="profile-img" src={profileImage}  alt="Avatar" height= '150px' width='150px'/>
            <h3>PROFILE</h3>
            <p>
            Dedicated IT Professional with 4+ years of experience in the industry. Currently, working at a Fortune Global 500 company. Passionate about work and gaining experience through extensive domain expertise in industry-leading technologies. A strong sense of team building, multi-tasking, driving product success, analytical thinking, and process efficiency. AWS DEVELOPER ASSOCIATE Certification is the latest addition to my pool of skillset and an exemplary of my focus on continuous learning.
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
                className="grid-item">Accenture, Application Development Analyst</div>
                <div className="grid-item">WEBSITE:</div>
                <div style={{color: 'grey'}}
                className="grid-item"><a href="https://karanahir.netlify.app/" target="_blank" style={{textDecoration: 'none'}} >https://karanahir.netlify.app/</a></div>
                <div className="grid-item">EMAIL:</div>
                <div style={{color: 'grey'}}
                className="grid-item">karanahir271994@gmail.com</div>
                </div>  

                <a href= {Resume} download="KaranAhirResume.pdf" style={{margin: '1.5rem', border: '2px solid', borderRadius: '5px', padding:'10px'}}>Download Resume</a>    
                </Element>
        // </div>
        
    );
}