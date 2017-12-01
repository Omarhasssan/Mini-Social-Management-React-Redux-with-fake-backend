import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../../../actions'
import Like from '../Like'
import AddReply from '../AddReply'
class Comments extends Component{
	constructor(props)
	{
		super(props);
		this.state = {expand:false}
	}

	render()
	{
		const {comments,users,comment,user} = this.props;
		const{expand} = this.state;
		let _this = this;
		return(
			<div>
				{comment.repliesId.length > 0 ?
					comment.repliesId.map(function(cId){
						let cmnt = comments.filter(cm=>cm.id == cId)
						let userReply = users.filter(u=>u.id == cmnt[0].userId)
						return <div className="column is-offset-2">
							username:<p>{userReply[0].account.name}</p>
							txt:<p>{cmnt[0].txt}</p>
							<Like 
								liked={cmnt[0].likes.usersId.includes(user.id) ? true : false } 
								likes={cmnt[0].likes}
								comment={cmnt[0]}
								users={users}
								usedFor={'comment'}
						 	/>
							<AddReply
								comment={cmnt[0]}
								user={user}
								users={users}
								comments={comments}
							 />
						</div>	
					})
					:null
				 }
			</div>
		)
	}
}
export default connect()(Comments);


