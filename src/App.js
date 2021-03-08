import React from 'react';
import './App.css';

import { Header } from "./components/header/header.component";
import { Home } from "./components/home/home.component";
import { About } from "./components/about/about.component";
import { Resume } from "./components/resume/resume.component";
import {Contact} from "./components/contact/contact.component";
import { Footer } from "./components/footer/footer.component";



function App () { 
    return (
      <div className="layout">
        <Header/> 
        <Home/>
        <About/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
      
    )
}

export default App;
