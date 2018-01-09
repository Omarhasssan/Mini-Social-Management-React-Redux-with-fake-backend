import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addShare} from '../../../actions'
class Share extends Component{
	constructor(props)
	{
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick()
	{
		this.props.dispatch(addShare(this.props.post.id))		
	}
	render()
	{

		return(
		<div>
			<a style={{color:'white'}} onClick={this.handleClick}>
			SHARE
			</a>	
			
		</div>
		)
	}
}
export default connect()(Share);


