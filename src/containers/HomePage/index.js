import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import AddPost from '../../components/addPost'
import Posts from '../../components/Posts'
import { connect } from 'react-redux';
import {addPost} from '../../actions'
const css = require('./styled.css');

class HomePage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<div  className="post-controller col-12  col-md-8 col-lg-9">
				<AddPost addPost = {(txt)=>this.props.dispatch(addPost(txt))}  />						
				<Posts 
			     {...this.props}
				 usedFor ={'HomePage'}
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
mapStateToProps)(HomePage);