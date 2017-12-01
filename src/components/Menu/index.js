import React,{Component} from 'react';
import {Link , IndexLink} from 'react-router';
const css = require('./styled.css');

class Menu extends Component{

	constructor(props) {
        super(props);

    }
     componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside=(event)=>{
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.menuHide()
        }
    }
    setWrapperRef=(node)=>{
        this.wrapperRef = node;
    }


	render()
	{
	return(
		<div className="bg"  >
		<div  ref={this.setWrapperRef} className="container column is-2">
		<IndexLink to="/" activeStyle={{ color: 'red' }}>
			<span className="column">Home</span>
		</IndexLink>
		<Link to="/profile" activeStyle={{ color: 'red' }}>
			<span className="column">Profile</span>
		</Link>
		<Link to="/Signup" activeStyle={{ color: 'red' }}>
			<span className="column">Signup</span>
		</Link>
		<Link to="/Login" activeStyle={{ color: 'red' }}>
			<span className="column">Login</span>
		</Link>

		</div>
		</div>
	)
	}
}
export default Menu;