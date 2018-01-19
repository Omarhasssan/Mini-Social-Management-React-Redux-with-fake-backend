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




export function addPost(txt,mentionedUser = -1)
{
	return dispatch =>{
		return userService.addPost(txt,mentionedUser)
			.then(
				res => {
						
					  dispatch({type:'UPDATE_POSTS',posts:res.json.posts})
					  dispatch({type:'UPDATE_USER_POSTS',users:res.json.users})
					  dispatch({type:'ADD_POST_ID',postId:res.json.posts[res.json.posts.length-1].id})
				}
			)
	}
}
export function getPost(postId)
{
	return dispatch =>{
		return userService.getPost(postId)
			.then(
				res =>{
					dispatch({type:'GET_POST',post:res.json})
				}
			)
	}
}
export function addShare(postId)
{
	return dispatch =>{
		return userService.addShare(postId)
			.then(
				res => {
					
					
					  dispatch({type:'UPDATE_POSTS',posts:res.json})
					  dispatch({type:'ADD_POST_ID',postId:res.json})

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
export function ReplyForReply(cmntId,replyId,type)
{
	return dispatch =>{
		dispatch({type:type,replyId,cmntId})
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
