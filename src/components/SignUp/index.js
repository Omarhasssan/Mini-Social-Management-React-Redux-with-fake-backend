import React ,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import {register} from '../../actions'
class SignUp extends Component {
	constructor(props)
	{
		super(props);
		this.state = {username:'',password:''}
		this.handleChange = this.handleChange.bind(this)
	}
	validate()
	{		
	   this.props.dispatch(register({name:this.state.username,pw:this.state.password}));				
	}
	handleChange(e)
	{
		this.setState({
			[e.target.name]:e.target.value,
		})
	}
	render()
	{
		 let {username,password,usernameChange,passwordChange} = this.state
		return(
			<div>
				<div>
				{this.props.alertMsg}
				</div>
				<div className="column">
					<label >user name : </label>
					<input value={username} name="username"   onChange={this.handleChange} type="text" />
				</div>
				<div className="column">
					<label >password : </label>
					<input value={password} name="password" onChange={this.handleChange} type="password" />
				</div>
				<div className="column">
					<button disabled={username.length == 0 || password.length == 0} onClick={()=>this.validate(this.name,this.pw)}>SignUp</button>
				</div>
				{this.props.registering ? 'loadinngg' : null}
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	registering:state.register.registering,
	alertMsg:state.alert
})


export default withRouter(connect(mapStateToProps)(SignUp));