import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment,ReplyForReply} from '../../../actions'
import Like from '../Like'
import AddComment from '../AddComment'
import Comment from '../Comment'
class Comments extends Component{
	constructor(props)
	{
		super(props);
		this.state = {expand:{id:1,expnd:false}}
	}

	render()
	{
		/*
		*username
		*txt
		*/
		const {comments,users,post,user} = this.props;
		const{expand} = this.state;
		let _this = this;
		return(
			<div className="col" >
				{post.commentsId.map(function(cmntId){
					let comment = comments.filter(cmnt=>cmnt.id == cmntId)
				
					if(comment[0]) 
					{
					   let userComment = users.filter(user=>comment[0].userId == user.id)
						return(
							<Comment 
								CommentOwner={userComment[0]}
								comment={comment[0]}
								{..._this.props}
							/>
						)
					}
				}
				)}
			</div>
		)
	}
}
export default connect()(Comments);


  