 export  function register (state={},action)
{
	switch(action.type){
		case'REGISTER_REQUEST':
			return {registering:true}
		case 'REGISTER_SUCCEED':
			return {registered:true}
		case 'REGISTER_FAILURE':
			return {}
		
		default:
			return state;
	}
}
export  function login (state={},action)
{
	switch(action.type){
		case'LOGIN_REQUEST':
			return {logining:true}
		case 'LOGIN_SUCCEED':
			return {logged:true}
		case 'LOGIN_FAILURE':
			return {}
		
		default:
			return state;
	}
}
const registeredIntialState = JSON.parse(localStorage.getItem('users')) || []
export  function registeredUsers (state=registeredIntialState,action)
{
	switch(action.type){
		case'ADD_USER':
			return [...state,action.user]
		default:
			return state;
	}
}
const intialUserState = JSON.parse(localStorage.getItem('user')) || {}
export function loggedUser (state=intialUserState,action)
{
	switch(action.type){
		case 'MAKE_USER_ACTIVE':
			return {...action.user}
		case 'ADD_POST_ID':
			return {...state,posts:{id:[...state.posts.id,action.postId]}}	
		default:
			return state;
	}
}