import React from "react";
import './resume.styles.css';
import {Chrono} from "react-chrono";
import briefcaseImg from '../../assets/briefcase-solid.svg';
import bookImg from "../../assets/book-solid.svg";
import {JOB_DATA} from "../../data/experience.data";
import {EDUCATION_DATA} from "../../data/education.details";

export const Resume = () => {
    return(
        <div id="resume" className="resume-grid">
            <h2 style={{ color: '#b31746', fontSize: '25px'}}>Resume</h2>
            <h1 style={{ color: 'black', fontSize:'40px', margin:'0', textAlign:'center'}}>More of my credentials.</h1>
            <h3 style={{color: 'grey', fontSize: '20px', textAlign: 'center'}}>Below are my Work Experiences and Educational details.</h3>
            <h4  style={{ color: '#b31746', fontSize: '20px'}}>Work Experience</h4>
            <div style= {{width: '90%'}}>
                <Chrono  hideControls= "true" items={JOB_DATA} mode={"VERTICAL"} theme={{primary: "#b31746", secondary: "white", cardBgColor: "whitesmoke", cardForeColor: "#b31746" }}>
                <div className="chrono-icons">
                        <img src={briefcaseImg} alt="image1" />
                        <img src={briefcaseImg} alt="image2" />
                </div>                
                </Chrono></div>
            <h4  style={{ color: '#b31746', fontSize: '20px'}}>Education</h4>
            <div style= {{width: '90%'}}><Chrono hideControls="true" items={EDUCATION_DATA} mode={"VERTICAL"} theme={{primary: "#b31746", secondary: "white", cardBgColor: "whitesmoke", cardForeColor: "#b31746" }}>
                <div className="chrono-icons">
                        <img src={bookImg} alt="image1" />
                        <img src={bookImg} alt="image2" />
                        <img src={bookImg} alt="image3" />
                </div>  
                </Chrono></div>
        </div>);
}
