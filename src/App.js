import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Navigation from './components/Navigation/Navigation';
import Inputs from './components/Inputs/Inputs';
import Login from './components/Login/Login';
import Stats from './components/Stats/Stats';
import firebase from './firebase'
import Media from 'react-media';
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
      user: 'crhext',
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      hasAccount: false,
      navDrawerActive: false
    };
  }

  clearInputs = () => {
    this.setState({ email: ''});
    this.setState({ password: ''});
  }

  clearErrors = () => {
    this.setState({ emailError: ''});
    this.setState({ passwordError: ''});
  }

  handleLogin = (email, password) => {
    this.clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            this.setState({ emailError: err.message});
            break;
          case 'auth/wrong-password':
            this.setState({ passwordError: err.message})
            break;
          default :

        }
      })
  }

  toggleNavDrawerState = () => {
    if (this.state.navDrawerActive === true) {
      this.setState({navDrawerActive: false})
    } else {
      this.setState({navDrawerActive: true})
    }
  }

  handleSignUp = (email, password) => {
    this.clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            this.setState({ emailError: err.message});
            break;
          case 'auth/weak-password':
            this.setState({ passwordError: err.message})
            break;
          default:

        }
      })
  }

  handleLogout = () => {
    firebase.auth().signOut();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.clearInputs();
        this.setState({ user: user});
      } else {
        this.setState({ user: ''}) 
      }
    })
  }

  /*componentDidMount() {
    this.authListener();
  }
  componentDidUpdate() {
    this.authListener();
  }*/


  onRouteChange = route => {
    this.setState({ route: route})
  }

  renderSwitch(param) {

    switch (param) {
      case "home": 
        return (
          <div>
            <Inputs user={this.state.user}/> 
          </div>
          );
      case "login": 
        return (
          <div>
            <Login /> 
          </div>
          );
      case "stats": 
        return (
          <div>
            <Stats /> 
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
          <Media query="(min-width: 600px)" render={() =>
          (<Header />)}
          />
          <Media query="(max-width: 599px)" render={() =>
          (<HeaderBar toggleNavDrawerState={this.toggleNavDrawerState} navDrawerActive={this.state.navDrawerActive}/>)}
          />            
          <div className={this.state.navDrawerActive === true ? 'nav-drawer-active' : 'nav-drawer'}>
            <Navigation toggleNavDrawerState={this.toggleNavDrawerState}/>
          </div>
        </div>
        <div className="main container-pad">
          <div>
            {this.renderSwitch(this.state.route)}
          </div>
        </div>
    </div>
    
  );
}
}

export default App;

