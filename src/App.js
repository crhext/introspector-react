import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import InputBar from './components/InputBar/InputBar';
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      descriptors: []
    };
  }

  render() {

  return (

    <div className="App">
        <Particles className="particles" params={particleOptions} />
        <div className="side">
          <Header />
          <Navigation />
        </div>
        <div className="main">
          <InputBar descriptors={this.state.descriptors}/>
        </div>
    </div>
    
  );
}
}

export default App;

