import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {configureFakeBackend} from './helpers'
import { Provider } from 'react-redux';

const store = configureStore();
configureFakeBackend();
ReactDOM.render(
	<Provider store = {store}>
	  <Router history={browserHistory} routes={routes} />
	</Provider>
	, document.getElementById('root')
);

