import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import {connect} from 'react-redux';
const css = require('./styled.css');
class AddPost extends Component{
	constructor()
	{
		super();
		this.state = {txt:''}
	}
	
	render()
	{
		let input;
		const {addPost,user} = this.props
		const {txt} = this.state;
			return(
			<div className="row add-post-container">
			<div 
			aria-autocomplete="list" 
			aria-multiline="true" 
			className=" w-100  d-flex justify-content-between align-items-end txtbox" 
			contentEditable="false" 
			role="textbox"
			>
				<div className="user-pic">
					<img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/21317736_2040293715996450_8481499289129284970_n.jpg?oh=9e47d50d7ef5c40002b15ea0b7541966&oe=5AC2BED0" alt=""/>
				</div>
				<textarea value={txt} onChange={(e)=>this.setState({txt:e.target.value})}   name="" id=""></textarea>
					<div className={`post-button ${!txt?'btn-disabled':'btn-enabled'}`}>
						<button  disabled={!txt} onClick = {()=>{addPost(txt);this.setState({txt:''})}} >Post</button>	
					</div>
			</div>
				
			</div>
		)
	}
	
}



export default connect()(AddPost);			

// <div ref={(node)=>this.input=node} contenteditable="true"></div>
