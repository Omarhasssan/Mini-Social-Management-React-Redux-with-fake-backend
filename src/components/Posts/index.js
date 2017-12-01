import React from 'react';
import {Link , IndexLink} from 'react-router';
import Like from './Like'
import Share from './Share'
import AddComment from './AddComment'
const Posts = ({userPage,usedFor,posts,users,user,comments}) =>{
	if(usedFor == 'UserPage')
	return(
		<div>
			{
				userPage.posts && userPage.posts.id.map(postId=>
					posts.map(p=>
						p.id == postId ? 
						<div>
						{p.action.shared && userPage.id == p.action.postOwnerId?
							<p>username:{userPage.account.name} shared his post</p>
							:p.action.shared && userPage.id != p.action.postOwnerId?
							<p>username:{userPage.account.name} shared {users.find(u=>u.id == p.action.postOwnerId).account.name} post</p>
							:<p>username:{userPage.account.name}</p>
						}
						<p>txt:{p.txt}</p>
						<Like 
							liked={ p.likes.usersId.includes(user.id) ? true : false } 
							likes={p.likes}
							post={p}
							users={users}
						 />
						
						<Share
							shares={p.shares}
							post={p}
							users={users}
						 />
						<AddComment
						    comments={comments}
							post={p}
							users={users}
							user={user}
						 />
						</div>
						:null
					)
				)
				
			}			
		</div>
	)				
	if(usedFor == 'HomePage')
	return(
		<div>
			{
				posts.map(
					function(p){
						let username = users.filter(function(u){if(u.id == p.userId) return true})
						return  <div>
											
						{p.action.shared && username[0].id == p.action.postOwnerId?
							<p>username:{username[0].account.name} shared his post</p>
							:p.action.shared && username[0].id != p.action.postOwnerId?
							<p>username:{username[0].account.name} shared {users.find(u=>u.id == p.action.postOwnerId).account.name} post</p>
							:<p>username:{username[0].account.name}</p>
						}
 								<p>txt:{p.txt}</p>
 								<Like 
	 								liked={ p.likes.usersId.includes(user.id) ? true : false } 
	 								likes={p.likes}
	 								post={p}
	 								users={users}
 								 />
 								
								<Share
									shares={p.shares}
									post={p}
									users={users}
								 />
 								<AddComment
									comments={comments}
									post={p}
									users={users}
									user={user}
								 />
 								</div>
					}
				)
			}			
		</div>
	)
}
export default  Posts;
