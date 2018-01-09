import React from 'react';
import {Link , IndexLink} from 'react-router';
import menuToggleAction from '../actions'
import Menu from '../components/Menu'
const css = require('./styled.css');

const Header = ({status,menuOpen,menuHide}) =>
{
		return(
		<nav className = "col-auto  navbar navbar-expand-lg  nav">
			    <ul className="navbar-nav flex-column">	
		 		
			        <Link className="nav-link   " to="/Home" activeClassName="active" >Home</Link>
			        <Link className="nav-link " to="/profile" activeClassName="active" >Profile</Link>
			        <Link className="nav-link " to="/signup" activeClassName="active" >Sign up</Link>
			        <Link className="nav-link " to="/login" activeClassName="active" >Login</Link>

			    </ul>
		</nav>
	)
	
}
export default Header;