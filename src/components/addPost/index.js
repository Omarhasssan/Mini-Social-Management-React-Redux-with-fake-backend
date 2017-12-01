import React from 'react';
import {Link , IndexLink} from 'react-router';
import {connect} from 'react-redux';
const AddPost = ({addPost,user}) =>{
	let input;
	return(
	<div className="column is-3 is-offset-5">
	<textarea ref={(node)=>this.input=node} />
	<button onClick = {()=>{addPost(this.input.value);this.input.value=''}} >Post</button>
	</div>
	)
}

export default connect()(AddPost);