import React from 'react';
import './HeaderBar.css';
import burger from './b-icon.svg';
import cancel from './cancel.svg';
import logo from './logo.svg';


class HeaderBar extends React.Component {
  render() {
   
  return (
    <div className="headerBar bg-blue">
      <img  src={logo} className="logo" ></img>
      <h2  className="title"> Introspector </h2>
      <img onClick={()=>this.props.toggleNavDrawerState()} src={this.props.navDrawerActive === true ? cancel : burger} className={this.props.navDrawerActive === true ? 'cancel' : 'burger'}></img>
   </div>
  );
};
}

export default HeaderBar;













