/**
 * Import framework
 */
import React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import { Provider } from 'react-redux';
import store, { history } from './store';

/**
 * Import components
 */
import App from './components/App';

// create router
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="*" component={App} />
		</Router>
	</Provider>
);

// render
ReactDOMRender(router, document.getElementById('app'));