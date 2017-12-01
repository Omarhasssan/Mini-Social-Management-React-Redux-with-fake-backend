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
		const {comments,users,post,user} = this.props;
		const{expand} = this.state;
		let _this = this;
		return(
			<div>
				{post.commentsId.map(function(cmntId){
					let comment = comments.filter(cmnt=>cmnt.id == cmntId)
					if(comment[0]) 
					{
					   let userComment = users.filter(user=>comment[0].userId == user.id)
						return(<div>
							<div>
								username:<p>{userComment[0].account.name}</p>
								txt:<p>{comment[0].txt}</p>
							</div>
							<div>
								<Like 
									liked={comment[0].likes.usersId.includes(user.id) ? true : false } 
									likes={comment[0].likes}
									comment={comment[0]}
									users={users}
									usedFor={'comment'}
							 	/>
							<a onClick={()=>_this.setState({expand:true})}>Reply</a>
							 	{expand?
									<AddReply
										comment={comment[0]}
										user={user}
										users={users}
										comments={comments}
									 />
									:null
							 	}
							</div>
						</div>)
					}
					
						
				}
				)}
			</div>
		)
	}
}
export default connect()(Comments);


