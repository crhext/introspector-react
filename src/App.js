import React from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const particleOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
};

function App() {
  return (
    <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Header />
        <Navigation />
    </div>
  );
}

export default App;
