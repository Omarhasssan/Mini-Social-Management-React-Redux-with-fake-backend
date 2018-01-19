import React ,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
import ImageUploader from 'react-images-upload';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import {register} from '../../actions'
const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';
class FormRender extends Component {
	constructor(props)
	{
		super(props);
		this.state = {username:'',password:'',pictures: [],uploadedFileCloudinaryUrl: ''}
		this.handleChange = this.handleChange.bind(this)
		this.onDrop = this.onDrop.bind(this);
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
	onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        })
    }
	render()
	{
		 let {pictures,username,password,usernameChange,passwordChange} = this.state
		 const {usedFor,onClick} = this.props;
		return(
			<div>
				<div>
				{this.props.alertMsg}
				</div>
				<div className="column">
					<label >user name &nbsp;  </label>
					<input value={username} name="username"   onChange={this.handleChange} type="text" />
				</div>
				<div className="column">
					<label >password &nbsp; &nbsp;  </label>
					<input value={password} name="password" onChange={this.handleChange} type="password" />
				</div>
				{usedFor != "Login" ? 
					<ImageUploader
		                withIcon={true}
		                buttonText='Choose images'
		                onChange={this.onDrop}
		                imgExtension={['.jpg', '.gif', '.png', '.gif']}
		                maxFileSize={5242880}
		            />
		            :
		            null
		        }

				<div className="column">
					<button 
					 disabled={username.length == 0 || password.length == 0}
					 onClick={()=>{
					 	if(usedFor == "Login")
								onClick(this.name,this.pw)
					 	else
					 	 	this.validate(this.name,this.pw)
					 }
					}
					 >
					 {`${usedFor== "Login" ? 'login' : 'signup'}`}
					 </button>
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


export default withRouter(connect(mapStateToProps)(FormRender));