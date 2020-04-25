import React from 'react';
import logo from './logo.svg';
import Avatar from './Avatar/Avatar'
import Nav from './Nav/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
