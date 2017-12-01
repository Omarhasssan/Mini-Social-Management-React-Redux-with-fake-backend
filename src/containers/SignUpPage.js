import React,{Component} from 'react';
import {Link , IndexLink,withRouter} from 'react-router';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp'
import {registerUser} from '../actions'
import Header from '../common/Header';
import {menuToggleAction} from '../actions'
class SignUpPage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		console.log("hii")
		return (
			<div>
				<Header 
				{...this.props} 
				menuOpen = {()=>this.props.dispatch(menuToggleAction('OPEN'))} 
				menuHide = {()=>this.props.dispatch(menuToggleAction('HIDE'))} 
				/>
				<SignUp />
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	status:state.menuToggle
})

export default withRouter(connect(mapStateToProps)(SignUpPage));