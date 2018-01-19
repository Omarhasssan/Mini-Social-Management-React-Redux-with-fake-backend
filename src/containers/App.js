import { connect } from 'react-redux';
import {Link , IndexLink} from 'react-router';
import Header from '../common/Header';
import React, { Component } from 'react';
import {menuToggleAction} from '../actions'
import HomePage from './HomePage'
const css = require('./styled.css');

class App extends Component{
	constructor() {
    super();
  }
	render()
	{
		return(
			<div className="container-row row" >
				 <Header 
				  />
				{this.props.children}
			</div>
		)
	}
}

	

export default connect()(App);