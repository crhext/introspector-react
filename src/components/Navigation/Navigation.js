import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav className="container nav">
			<div className="">
		      <ul >
		        <li><p id="home" className="f4 dim pointer" >Home</p></li>
		        <li><p id="stats" className="f4 dim pointer">Stats</p></li>
		        <li><p id="histry" className="f4 dim pointer">History</p></li>
		        <li><p id="account" className="f4 dim pointer">Account</p></li>
		      </ul>		
			</div> 
		</nav>
		);
}

export default Navigation;



