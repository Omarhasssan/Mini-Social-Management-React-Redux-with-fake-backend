import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions'
import {Link , IndexLink} from 'react-router';
import Header from '../common/Header.js';
import Posts from '../components/Posts';
import AddPost from '../components/addPost';
import {getUserPosts} from '../helpers';
class ProfilePage extends Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		let userposts =getUserPosts(this.props.user,this.props.Posts);
		return(
			<div  className="post-controller col-12  col-md-8 col-lg-9">
				<AddPost addPost = {(txt)=>this.props.dispatch(addPost(txt))}  />						
				<Posts 
				 usedFor={"ProfilePage"}
				 userposts={userposts}
			     {...this.props}
				/>							
			</div>
		)
	}
	
	
}
const mapStateToProps = (state) =>({
	Posts:state.Post,
	users:state.registeredUsers,
	user : state.loggedUser,
	comments:state.Comment,
	ReplyAlert:state.ReplyAlert

})

export default connect(
mapStateToProps)(ProfilePage);