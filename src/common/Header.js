import React from 'react';
import {Link , IndexLink} from 'react-router';

const css = require('./styled.css');

const Header = ({status,menuOpen,menuHide}) =>
{
		return(
		<nav className = "mb-5 mb-sm-5 mb-md-5 mb-lg-5 col-12  col-sm-auto col-md-auto col-lg-auto navbar navbar-expand-lg  nav">
			    <ul className="navbar-nav flex-row  flex-md-column flex-lg-column">	
		 		
			        <Link className="nav-link" to="/Home" activeClassName="active" >Home</Link>
			        <Link className="nav-link " to="/profile" activeClassName="active" >Profile</Link>
			        <Link className="nav-link " to="/signup" activeClassName="active" >Sign up</Link>
			        <Link className="nav-link " to="/login" activeClassName="active" >Login</Link>

			    </ul>
		</nav>
	)
	
}
export default Header;