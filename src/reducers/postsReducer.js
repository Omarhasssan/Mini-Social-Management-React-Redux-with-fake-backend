const intialPostState = JSON.parse(localStorage.getItem('posts')) || []
export  function Post (state=intialPostState,action)
{
	switch(action.type){
		case 'UPDATE_POSTS':
			return [...action.posts]
		default : return state;
	}
}
const intialCommentState = JSON.parse(localStorage.getItem('comments')) || []

export function Comment (state=intialCommentState,action)
{
	switch(action.type){
		case 'UPDATE_COMMENTS':
			return [...action.comments]
		
		default : return state;
	}
}

export function ReplyAlert (state={},action)
{
	switch(action.type)
	{
		case 'ADD_REPLY':
			return {replyId:action.replyId}
		case 'REMOVE_REPLY':
			return {}
		default: return state;
	}
}