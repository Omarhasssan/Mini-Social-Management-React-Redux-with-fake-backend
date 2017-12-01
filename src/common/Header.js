import React from 'react';
import {Link , IndexLink} from 'react-router';
import menuToggleAction from '../actions'
import Menu from '../components/Menu'
const css = require('./styled.css');

const Header = ({status,menuOpen,menuHide}) =>
{
	console.log(status)
		return(
	<div>
<nav className = "navbar is-primary">
		<div className="navbar-brand">
		
		<div className="navbar-item">
			<button
			onClick = {menuOpen}
			>
			<svg viewBox="0 0 24 24" >
				 <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
				 </path>
			 </svg>	
			</button>
		</div>
		
		</div>
	</nav>
	{status == 'OPEN' ? <Menu menuOpen={menuOpen} menuHide={menuHide} />:null}
	</div>
	)
	
}
export default Header;