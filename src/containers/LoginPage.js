import React,{Component} from 'react';
import {Link , IndexLink,withRouter} from 'react-router';
import { connect } from 'react-redux';
import Login from '../components/Login'
import {registerUser} from '../actions'
import Header from '../common/Header';
import {menuToggleAction} from '../actions'
class LoginPage extends Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return (
			<div>
				<Header 
				{...this.props} 
				menuOpen = {()=>this.props.dispatch(menuToggleAction('OPEN'))} 
				menuHide = {()=>this.props.dispatch(menuToggleAction('HIDE'))} 
				/>
				<Login />
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	status:state.menuToggle
})

export default withRouter(connect (mapStateToProps)(LoginPage));