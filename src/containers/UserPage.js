import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import { connect } from 'react-redux';
import Posts from '../components/Posts'
class UserPage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		
		
		return(
			<div>
				<Posts
				  userPage={this.props.userPage }
				  user={this.props.user}
				  users={this.props.users} 
				  posts = {this.props.posts} 
				  comments = {this.props.comments} 
				  usedFor ={'UserPage'}
				  />				
			</div>
		)
	}
}

const mapStateToProps = (state,ownProps)=>{
	const userPage = state.registeredUsers.find(user=>
			user.account.name == ownProps.params.name
		)
	
	if(userPage)
		return{userPage,posts:state.Post,users:state.registeredUsers,user:state.loggedUser}
	else return {userPage:{}}
}


export default connect(mapStateToProps
)(UserPage);