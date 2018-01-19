
export function getUserPosts(user,posts)
{
	let res = user.posts.id.map(userPostId => posts.filter(post => post.id == userPostId)[0] ) ;
	return res || [];
}
export function getPost(postId,posts)
{
	return posts.filter(p=>p.id == postId)[0];
}

export function getUser(userId,users)
{
	return users.filter(u=>u.id == userId)[0];
}