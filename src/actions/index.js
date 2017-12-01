import {userService} from '../service'
import {alertActions} from './alertActions'
import {browserHistory} from 'react-router'
export function menuToggleAction (payload){
	return {
			type:'TOGGLE_MENU',
			payload
	}
}

export function register(user)
{
	return dispatch =>{
		dispatch({type:'REGISTER_REQUEST'})
		return userService.register(user).then(
			user => {
				dispatch({type:'REGISTER_SUCCEED'}),
				dispatch({type:'ADD_USER',user:user.json}),
				browserHistory.push('/login');
			},
			err => {
				dispatch({type:'REGISTER_FAILURE'})
				// alert err msg
				dispatch(alertActions.err(err))
			}
		)
	}
}

export function login(user)
{
	return dispatch =>{
		dispatch({type:'LOGIN_REQUEST'})
		return userService.login(user)
			.then(
				user => {
				dispatch({type:'LOGIN_SUCCEED'})
				dispatch({type:'MAKE_USER_ACTIVE',user:user.json})
				browserHistory.push('/');
			},
			err => {
				dispatch({type:'LOGIN_FAILURE'})
				// alert err msg
				dispatch(alertActions.err(err))
			}
			)
	}
}




export function addPost(txt)
{
	return dispatch =>{
		return userService.addPost(txt)
			.then(
				post => {
					
					return(
					  dispatch({type:'UPDATE_POSTS',posts:post.json})
					)
				}
			)
	}
}
export function addShare(postId)
{
	return dispatch =>{
		return userService.addShare(postId)
			.then(
				post => {
					
					return(
					  dispatch({type:'UPDATE_POSTS',posts:post.json})
					)
				}
			)
	}
}
export function addComment(postId,txt)
{
	return dispatch =>{
		return userService.addComment(postId,txt)
			.then(
				res => {
					return(
					  dispatch({type:'UPDATE_POSTS',posts:res.json.posts}),
					  dispatch({type:'UPDATE_COMMENTS',comments:res.json.comments})
					)
				}
			)
	}
}
export function addReply(cmntId,txt)
{
	return dispatch =>{
		return userService.addReply(cmntId,txt)
			.then(
				res => {
					return(
					  dispatch({type:'UPDATE_COMMENTS',comments:res.json})
					)
				}
			)
	}
}
export function handleLike(targetId,liked,target)
{
	if(target == 'comment')
	{
		return dispatch =>{
		return userService.handleLike(targetId,liked,'comment')
			.then(
				comments => {
					return(
					  dispatch({type:'UPDATE_COMMENTS',comments:comments.json})

					)
				}
			)
		}
	}
	else{
		return dispatch =>{
		return userService.handleLike(targetId,liked,'post')
			.then(
				post => {
					return(
					  dispatch({type:'UPDATE_POSTS',posts:post.json})

					)
				}
			)
		}
	}
}
