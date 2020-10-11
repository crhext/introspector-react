import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import InputDescriptors from './components/InputDescriptors/InputDescriptors';
import InputMeasurements from './components/InputMeasurements/InputMeasurements';
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
      route: 'home',
      username: 'crhext',
      activityDescriptors: [],
      foodDescriptors:[],
      mood: 3,
      energy: 3, 
      productivity: 3
    };
  }

  descriptorsTypeHandlerText = (route) => {
    if (this.state.route == 'home') {
      return 'activityDescriptors'
    } else if (this.state.route == 'food') {
      return 'foodDescriptors'
    }    
  }

  descriptorsTypeHandlerState = (descriptorsType) => {
      if (descriptorsType == 'activityDescriptors') {
        return this.state.activityDescriptors
      } else if (descriptorsType == 'foodDescriptors') {
        return this.state.foodDescriptors
      }     
  }

  deleteDescriptorHandler = (descriptorsType, descriptor, event) => {
    event.preventDefault()
    const descriptorsArray = this.descriptorsTypeHandlerState(descriptorsType)
    if (descriptorsArray.indexOf(descriptor) > -1) {
      const i = descriptorsArray.indexOf(descriptor);
      descriptorsArray.splice(i,1);
      this.setState({ [descriptorsType]: descriptorsArray})
    }
  }

  updateDescriptorHandler = (descriptorsType, descriptorsArray) => {
    this.setState({ [descriptorsType]: descriptorsArray})
  }

  updateMeasurementsHandler = (measurement, value) => {
    this.setState( {[measurement]: value})
  }

  onRouteChange = route => {
    this.setState({ route: route})
  }

  renderSwitch(param) {

    switch (param) {
      case ("home"): 
        return (
          <div>
            <InputDescriptors activityDescriptors={this.state.activityDescriptors} foodDescriptors={this.state.foodDescriptors} deleteDescriptorHandler={this.deleteDescriptorHandler} updateDescriptorHandler={this.updateDescriptorHandler} descriptorsType={this.descriptorsTypeHandlerText(this.state.route)} descriptorsTypeHandlerState={this.descriptorsTypeHandlerState} onRouteChange={this.onRouteChange} />
          </div>
          );
      case "food": 
        return (
          <div>
            <InputDescriptors activityDescriptors={this.state.activityDescriptors} foodDescriptors={this.state.foodDescriptors} deleteDescriptorHandler={this.deleteDescriptorHandler} updateDescriptorHandler={this.updateDescriptorHandler} descriptorsType={this.descriptorsTypeHandlerText(this.state.route)} descriptorsTypeHandlerState={this.descriptorsTypeHandlerState} onRouteChange={this.onRouteChange} />
          </div>
          );
      case "measurements": 
        return (
          <div>
            <InputMeasurements updateMeasurementsHandler={this.updateMeasurementsHandler} />
          </div>
          );
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
          {this.renderSwitch(this.state.route)}

          </div>
        </div>
    </div>
    
  );
}
}

export default App;

