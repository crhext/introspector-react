import React from 'react';
import './Header.css';
import logo from './logo.svg';
import Tilt from 'react-tilt'

const Header = ({ setNavState, navFilter, route }) => {
	return (
		<div className="container header">
			<Tilt className="Tilt" options={{ max : 25 }}>
				<div className="container header-inner br2 shadow-2">			
		            <img className="header-img" alt="" src={logo}></img>
		            	<h1 className="f3 pointer dim">
		            		Introspector
		            	</h1>
			        <p className="f6 i">Look inwards to identify what makes you feel happy, productive, and energised.</p>
				</div> 
			</Tilt>
		</div>
	);
}

export default Header;
