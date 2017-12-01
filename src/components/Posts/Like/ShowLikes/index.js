import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
const ShowLikes = ({likes,users})=>(
		<div>
			{likes.usersId.map(u=>
			 	users.map(user=>user.id == u ? <Link to={`/${user.account.name}`}><p>{user.account.name}</p></Link>:null)
			 )
			}
		</div>
)
export default connect()(ShowLikes);


