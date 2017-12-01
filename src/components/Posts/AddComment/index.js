import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../../actions'
import Comments from '../Comments'
class AddComment extends Component{
	constructor(props)
	{
		super(props);
		this.state={expand:false,txt:''}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick()
	{
		this.props.dispatch(addComment(this.props.post.id,this.state.txt))		
	}
	render()
	{

		const {comments,users,post,user} = this.props;
		const {expand} = this.state;
		return(<div>
		<div>
			<a onClick={()=>this.setState({expand:true})}>
			Comment
			</a>	
			{expand ? <div>	
				<input type="text" onChange={(e)=>this.setState({txt:e.target.value})} />
				<button onClick={this.handleClick}>add</button>
			</div>
				:
				null
			}
		</div>
		<div>
			<Comments
			  users={users}
			  comments={comments} 
			  post={post}
			  user={user}
			  />
		</div>

		
		</div>)
	}
}
export default connect()(AddComment);


