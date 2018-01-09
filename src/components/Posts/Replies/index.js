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
	handleReply(replyId)
	{

		this.props.dispatch(ReplyForReply(replyId,'ADD_REPLY'))
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
						// m3aya l reply l reply dah le no3en y2ma ykon reply 3ady 
						// y2ma reply 3aml mention le rply mo3yn hykon 3ndo mentionedReplyId != -1
						//  test
						//console.log("reply txt",reply[0].txt,"reply mention",reply[0].mentionReplyId)
						//hgeb l mentioned Reply
						let mentionedReply = comments.filter(cm=>cm.id == reply[0].mentionReplyId)
						let userMentionedReply = mentionedReply.length > 0 ? users.filter(u=>u.id == mentionedReply[0].userId) : ''
						let userReply = users.filter(u=>u.id == reply[0].userId)
						return(
							<Comment 
								commentOwner={userReply[0]}
								commentR={reply[0]}
								mentionedReply={mentionedReply}
								userMentionedReply = {userMentionedReply[0]}
								useFor={"replies"}
								handleReply={()=>_this.handleReply(reply[0].id)}
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


