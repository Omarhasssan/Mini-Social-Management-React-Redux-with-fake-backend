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
	if(!localStorage.getItem('user') && nextState.location.pathname.search("signup") == -1  )
	{
		console.log("hey i'm here",nextState)
		replace({
			pathname:'/signup',
			state:{nextPathname:nextState.location.pathname}
		})
	}
}

export default(
	
	<div>
	<Route path="/" onEnter={Auth} component={App}>	
		<Route path="/Home" onEnter={Auth}  component={HomePage} />
		<Route path="/profile" onEnter={Auth}  component={ProfilePage} />
		<Route path="/login"  component={LoginPage} />
		<Route path="/signup"  component={SignUpPage} />
		<Route path="/:name" onEnter={Auth}  component={UserPage} />
	</Route>


	</div>
)