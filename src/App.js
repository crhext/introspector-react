import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import InputDescriptors from './components/InputDescriptors/InputDescriptors';
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

  deleteDescriptorHandler = (descriptor, event) => {
    event.preventDefault()
    const descriptorsArray = this.state.descriptors
    if (descriptorsArray.indexOf(descriptor) > -1) {
      const i = descriptorsArray.indexOf(descriptor);
      descriptorsArray.splice(i,1);
      this.setState({ descriptors: descriptorsArray})
    }
  }

  render() {

  return (

    <div className="App">
        <Particles className="particles" params={particleOptions} />
        <div className="side">
          <Header />
          <Navigation />
        </div>
        <div className="main container">
          <div>
            <InputDescriptors descriptors={this.state.descriptors} deleteDescriptorHandler={this.deleteDescriptorHandler} />
          </div>
        </div>
    </div>
    
  );
}
}

export default App;

