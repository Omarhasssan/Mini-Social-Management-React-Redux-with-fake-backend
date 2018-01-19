import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './containers/App'
import HomePage from './containers/HomePage'
import ProfilePage from './containers/ProfilePage'
import FormRenderPage from './containers/FormRenderPage'
import UserProfile from './containers/UserProfile'

function Auth(nextState,replace)
{
	if(!localStorage.getItem('user') && nextState.location.pathname.search("signup") == -1  )
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
		<Route path="/Home" onEnter={Auth}  component={HomePage} />
		<Route path="/profile" onEnter={Auth}  component={ProfilePage} />
		<Route path="/login" usedFor={"Login"}  component={FormRenderPage} />
		<Route path="/signup"  component={FormRenderPage} />
		<Route path="/:name" onEnter={Auth}  component={UserProfile} />
	</Route>


	</div>
)