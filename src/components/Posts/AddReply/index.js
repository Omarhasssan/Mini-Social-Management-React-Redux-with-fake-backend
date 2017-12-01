import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addReply} from '../../../actions'
import Replies from '../Replies'
class AddReply extends Component{
	constructor(props)
	{
		super(props);
		this.state={txt:''}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick()
	{
		this.props.dispatch(addReply(this.props.comment.id,this.state.txt))		
	}
	render()
	{

		const {comment,user,users,comments} = this.props;
		return(<div>
		<div>
			<input type="text" onChange={(e)=>this.setState({txt:e.target.value})} />
			<button onClick={this.handleClick}>add</button>
		</div>
		
			<div>
					<Replies
					  users={users}
					  comments={comments} 
					  comment={comment}
					  user={user}
					  />
			</div>
		

		
		</div>)
	}
}
export default connect()(AddReply);


