import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Inputs from './components/Inputs/Inputs';
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
      username: 'crhext'
    };
  }

  onRouteChange = route => {
    this.setState({ route: route})
  }

  renderSwitch(param) {

    switch (param) {
      case "home": 
        return (
          <div>
            <Inputs username={this.props.username}/> 
          </div>
          );
      default:
        return ''
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

