import React,{Component} from 'react';
import {Link , IndexLink,withRouter} from 'react-router';
import { connect } from 'react-redux';
import FormRender from '../components/FormRender'
import {registerUser} from '../actions'
import Header from '../common/Header';
import {login} from '../actions'
class FormRenderPage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		console.log(this.props)
		return (
			<div  className="col-auto signup-container ">
				
				{this.props.route.usedFor== "Login"?
					<FormRender 
					usedFor={"Login"}
					onClick = {(name,pw)=>this.props.dispatch(login({name,pw}))}
					/>
					:
					<FormRender />
				}
				
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	status:state.menuToggle
})

export default withRouter(connect(mapStateToProps)(FormRenderPage));