import React from 'react';
import logo from './logo.svg';
import AboutMe from './AboutMe/AboutMe';
import Avatar from './Avatar/Avatar';
import Nav from './Nav/Nav';
import IntroAnimation from './IntroAnimation/IntroAnimation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar/>
        <IntroAnimation/>
        <AboutMe/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Nav/>
        
      </header>
    </div>
  )
};

export default App;
