import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addShare} from '../../../actions'
class Share extends Component{
	constructor(props)
	{
		super(props);
		this.state={expand:false}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick()
	{
		this.props.dispatch(addShare(this.props.post.id))		
	}
	render()
	{

		const {shares} = this.props;
		const {expand} = this.state;
		return(
		<div>
			{shares.usersId && shares.usersId.length > 0 ? 
				<p onClick={()=>this.setState({expand:!expand})}>{shares.usersId.length} shares</p>
				:null
			}
			
			<a onClick={this.handleClick}>
			SHARE
			</a>	
			
		</div>
		)
	}
}
export default connect()(Share);


