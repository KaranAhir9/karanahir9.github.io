import React from "react";
import './contact.styles.css';


export const Contact = () => {
    return(
        <div id="contact" className="contact-grid">
            <h2 style={{ color: '#b31746', fontSize: '25px' }}>Contact</h2>
            <h1 style={{ color: 'white', fontSize:'40px', margin:'0',textAlign:'center'}}>I'd Love To Hear From You.</h1>
            <h3 style={{color: 'grey', fontSize: '20px', textAlign:'center'}}>Please click the icon below to send me an Email.</h3>
            <a  target="_blank" rel="noreferrer" href="mailto:karanahir271994@gmail.com"><i className="fa fa-envelope-o fa-5x" aria-hidden="true"></i></a>

            <div className = "icons">
                <div>
                <a href="https://twitter.com/karanahir9?s=09" target="_blank" rel="noreferrer" >
                     <i className="fa fa-twitter fa-inverse fa-3x"></i>
                </a>
                <h3>Twitter</h3>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/karan-ahir-a02310150/" target="_blank" rel="noreferrer" >
                    <i className="fa fa-linkedin fa-inverse fa-3x"></i>
                 </a>
                 <h3>Linked In</h3>
                </div>
                <div>
                <a href="https://github.com/karanahir9" target="_blank" rel="noreferrer" >
                    <i className="fa fa-github fa-inverse fa-3x"></i>
                </a>
                <h3>GitHub</h3>
                </div>
            </div>
        </div>
    );
}