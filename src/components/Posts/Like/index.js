import React,{Component} from 'react';
import {connect} from 'react-redux';
import ShowLikes from './ShowLikes'
import {handleLike} from '../../../actions'
class Like extends Component{
	constructor(props)
	{
		super(props);
		this.state={expand:false}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick()
	{
		if(this.props.usedFor == 'comment')
			this.props.dispatch(handleLike(this.props.comment.id,this.props.liked,'comment'))
		else {
			this.props.dispatch(handleLike(this.props.post.id,this.props.liked,'post'))
		}
	}
	render()
	{
		if(this.props.usedFor == 'comment')
			var {comment,users,likes,liked} = this.props;
		else
			{
				var {post,users,likes,liked} = this.props;
				var postId = post.id
			}
		
		const {expand} = this.state;

		return(
		<div>
			{likes.usersId && likes.usersId.length > 0 ? 
				<p onClick={()=>this.setState({expand:!expand})}>{likes.usersId.length} likes</p>
				:null
			}
			{expand?
				 <ShowLikes likes={likes} users={users} />
				 :null
			}	
			<a onClick={this.handleClick}>
			{liked ? 'UNLIKE' : 'LIKE'}
			</a>	
			
		</div>
		)
	}
}
export default connect()(Like);


