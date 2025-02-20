import React from "react";
import "./home.styles.css";
import {scroller} from "react-scroll";

function handleAboutSection() {
    scroller.scrollTo('aboutSectionElement', {
        duration: 1500,
        delay: 100,
        smooth: true,
    })
}

export const Home = () => {

    return(
        <div  className="home">
            <h2>HELLO</h2>
            <h1>I'm Karan Ahir.</h1>
            <h5>FRONT-END DEVELOPER | JAVASCRIPT | REACT | HTML | CSS</h5>

            <button onClick={handleAboutSection}>More About Me ˅</button>
        </div>
    );
}