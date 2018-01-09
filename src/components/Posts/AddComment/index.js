import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment,addReply,ReplyForReply} from '../../../actions'
import Comments from '../Comments'
import Replies from '../Replies'
class AddComment extends Component{
	constructor(props)
	{
		super(props);
		this.state={expand:false,txt:''}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e)
	{
		if(this.props.target == "reply")
		{
			if(e.key == 'Enter')
			{
				if(this.props.ReplyAlert.replyId)
				{
					this.props.dispatch(
						addReply({
							cmntId:this.props.comment.id,
							replyId:this.props.ReplyAlert.replyId,
							txt:this.state.txt,
							mentioned:true
						})
					)
					this.props.dispatch(ReplyForReply(-1,'REMOVE_REPLY'))
				}
				else		
					this.props.dispatch(
						addReply({
							cmntId:this.props.comment.id,
							txt:this.state.txt,
							mentioned:false
						})
					)		
				this.setState({txt:''})
			}
		}
		else
		{
			if(e.key == 'Enter')
			{
				this.props.dispatch(addComment(this.props.post.id,this.state.txt))
				this.setState({txt:''})
			}		
		}
		
	}
	handleClickReply(e)
	{

	}
	handleClose()
	{
		this.props.dispatch(ReplyForReply(-1,'REMOVE_REPLY'))

	}
	render()
	{

		const {comments,comment,users,post,user,target,ReplyAlert} = this.props;
		let username,reply
		if(ReplyAlert.replyId)
		{
			 reply = comments.filter(c=>c.id == ReplyAlert.replyId)
			 username = users.filter(u=>u.id == reply[0].userId)
		}
		return(
			<div className="row align-items-center">
			{target == "reply"?
				<Replies
				 {...this.props}
			  	/>
			  	:
			  	<Comments
				 {...this.props}
				/>
			}
			<div className="w-100 mb-3"></div>
		  	{ReplyAlert.replyId && target == "reply" ?
			  	<div className="col mt-2 mentioned-reply-container">
				  	<div className="row mentioned-reply-row">
						<div className="col-auto cmnt-user-img">
							<img src="data:image/jpeg;base64,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" />
						</div>
						<div className="col p-0">
							<p className="username">{username[0].account.name}</p>
							<p id="mention-comment-reply" className="cmnt">{reply[0].txt}</p>
						</div>
						<div onClick={()=>this.handleClose()} className="col-auto close">x</div>

				  	</div>
					</div>
			  	:null
		    }
		    <div className="w-100"></div>
			<div className="pr-0 col-auto cmnt-user-img">
				<img src="data:image/jpeg;base64,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" />
			</div>
			<div className="col  pl-1 cmnt-input">
				<input
				 value={this.state.txt}
				 placeholder={`${target == "reply" ?'write a reply' :'write a comment'}`}
				 type="text" 
				 onChange={(e)=>this.setState({txt:e.target.value})}
				 onKeyPress={this.handleClick}
				 />
			</div>
				
			</div>

		)
	}
}
export default connect()(AddComment);


