import {combineReducers} from 'redux';
import menuToggle from './menuReducer';
import * as posts from './postsReducer';
import * as users from './usersReducer';
import * as alert from './alertReducer';

const rootReducer = combineReducers({
	menuToggle,
	...posts,
	...users,
	...alert
})

export default rootReducer;