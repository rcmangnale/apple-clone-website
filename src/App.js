import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Section from './components/Section';

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar/>
      </header>
      <Section/>
    </React.Fragment>
  );
}

export default App;
