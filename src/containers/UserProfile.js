import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import { connect } from 'react-redux';
import {addPost} from '../actions'
import AddPost from '../components/addPost';
import Posts from '../components/Posts';
import {getUserPosts} from '../helpers';

class UserProfile extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		let userposts = getUserPosts(this.props.UserProfile,this.props.Posts);
		
		return(
			<div  className="post-controller col-12  col-md-8 col-lg-9">
				<AddPost addPost = {(txt)=>this.props.dispatch(addPost(txt,this.props.UserProfile))}  />						
				<Posts
				   usedFor={"UserProfile"}
				   UserProfile = {this.props.UserProfile}
				   userposts={userposts}
				   {...this.props}
				  />						
			</div>			
		)
	}
}

const mapStateToProps = (state,ownProps)=>{
	const UserProfile = state.registeredUsers.find(user=>
			user.account.name == ownProps.params.name
		)
	if(UserProfile)
		return{
			UserProfile,
			Posts:state.Post,
			users:state.registeredUsers,
			user:state.loggedUser,
			comments:state.Comment,
			ReplyAlert:state.ReplyAlert

		}
	else return {userProfile:{}}
}


export default connect(mapStateToProps
)(UserProfile);