export const userService = {
    register,
    login,
    addPost,
    handleLike,
    addShare,
    addComment,
    addReply
    
};

function register(user)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify(user)

	}
	return fetch('/register',requestOptions).then(handleResponse)
}
function login(user)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify(user)

	}
	return fetch('/login',requestOptions).then(handleResponse)
}
function addPost(txt)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify(txt)

	}
	return fetch('/addpost',requestOptions).then(handleResponse)
}
function addShare(postId)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify(postId)

	}
	return fetch('/addshare',requestOptions).then(handleResponse)
}
function addComment(postId,txt)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify({postId:postId,txt:txt})

	}
	return fetch('/addcomment',requestOptions).then(handleResponse)
}
function addReply(cmntId,txt)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify({cmntId:cmntId,txt:txt})

	}
	return fetch('/addreply',requestOptions).then(handleResponse)
}
function handleLike(targetId,liked,target)
{
	const requestOptions={
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify({targetId:targetId,liked:liked,target:target})

	}
	return fetch('/handlelike',requestOptions).then(handleResponse)
}
function handleResponse(res)
{
	if(!res.ok)
		return Promise.reject(res)
	return Promise.resolve(res)
}