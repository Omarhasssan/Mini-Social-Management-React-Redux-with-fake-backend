import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './containers/App'
import HomePage from './containers/HomePage'
import ProfilePage from './containers/ProfilePage'
import SignUpPage from './containers/SignUpPage'
import LoginPage from './containers/LoginPage'
import UserPage from './containers/UserPage'

function Auth(nextState,replace)
{
	if(!localStorage.getItem('user'))
	{
		replace({
			pathname:'/signup',
			state:{nextPathname:nextState.location.pathname}
		})
	}
}

export default(
	
	<div>
	<Route path="/" onEnter={Auth} component={App}>	
		<IndexRoute component={HomePage} />
		<Route path="/profile"  component={ProfilePage} />
	</Route>
		<Route path="/signup"  component={SignUpPage} />
		<Route path="/login"  component={LoginPage} />
		<Route path="/:name"  component={UserPage} />
	</div>
)