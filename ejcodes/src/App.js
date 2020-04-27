import React from 'react';
import logo from './logo.svg';
import AboutMe from './AboutMe/AboutMe';
import Avatar from './Avatar/Avatar';
import Nav from './Nav/Nav';
import IntroAnimation from './IntroAnimation/IntroAnimation.js';
import {gsap} from 'gsap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar/>
        <IntroAnimation/>
        <AboutMe/>
        
        <Nav/>
        
      </header>
    </div>
  )
};

export default App;
