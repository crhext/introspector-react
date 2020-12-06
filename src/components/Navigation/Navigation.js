import React from 'react';
import './Navigation.css';

const Navigation = ({ toggleNavDrawerState} ) => {
	return (
		<nav className="container nav">
			<div className="">
		      <ul >
		        <li onClick={()=>toggleNavDrawerState()}><p id="home" className="f4 dim pointer" >Home</p></li>
		        <li onClick={()=>toggleNavDrawerState()}><p id="stats" className="f4 dim pointer">Stats</p></li>
		        <li onClick={()=>toggleNavDrawerState()}><p id="histry" className="f4 dim pointer">History</p></li>
		        <li onClick={()=>toggleNavDrawerState()}><p id="account" className="f4 dim pointer">Account</p></li>
		      </ul>		
			</div> 
		</nav>
		);
}

export default Navigation;



