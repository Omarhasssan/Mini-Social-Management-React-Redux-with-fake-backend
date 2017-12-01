import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import AddPost from '../components/addPost'
import Posts from '../components/Posts'
import { connect } from 'react-redux';
import {addPost} from '../actions'

class HomePage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<div>
				<AddPost addPost = {(txt)=>this.props.dispatch(addPost(txt))}  />
				<Posts 
				  user={this.props.user}
				  users={this.props.users} 
				  posts = {this.props.posts}
				  comments = {this.props.comments} 
				  usedFor ={'HomePage'}
				 />				
			</div>
		)
	}
}


const mapStateToProps = (state) =>({
	posts:state.Post,
	users:state.registeredUsers,
	user : state.loggedUser,
	comments:state.Comment
})


export default connect(
mapStateToProps)(HomePage);