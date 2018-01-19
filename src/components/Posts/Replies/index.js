import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ReplyForReply} from '../../../actions'
import Like from '../Like'
import Comment from '../Comment'
class Replies extends Component{
	constructor(props)
	{
		super(props);
	}
	handleReply(cmntId,replyId)
	{

		this.props.dispatch(ReplyForReply(cmntId,replyId,'ADD_REPLY'))
	}

	render()
	{
		const {comments,users,comment,user} = this.props;
		let _this = this;

		return(
			<div className="col">
				{comment.repliesId.length > 0 ?
					comment.repliesId.map(function(cId){
						let reply = comments.filter(cm=>cm.id == cId)
						let mentionedReply = comments.filter(cm=>cm.id == reply[0].mentionReplyId)
						let userMentionedReply = mentionedReply.length > 0 ? users.filter(u=>u.id == mentionedReply[0].userId) : ''
						let userReply = users.filter(u=>u.id == reply[0].userId)
						return(
							<Comment 
								ReplyOwner={userReply[0]}
								commentR={reply[0]}
								mentionedReply={mentionedReply}
								userMentionedReply = {userMentionedReply[0]}
								useFor={"replies"}
								handleReply={()=>_this.handleReply(comment.id,reply[0].id)}
								{..._this.props}
							/>
							)
					})
					:null
				 }
			</div>
		)
	}
}
export default connect()(Replies);


