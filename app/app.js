import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoListContainer, StatsContainer } from './containers';

import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from './components/Header.js'
import HomePage from './components/HomePage.js'
import Users from './components/Users.js'
import User from './components/User.js'

// http://redux.js.org/docs/api/createStore.html
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const history = createBrowserHistory();

render(
	// https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
    <Router history={history}>
		<Provider store={store}>
			<div>
				<Header />
		        <Route path="/" exact component={HomePage} />
		        <Route path="/todo" exact component={TodoListContainer} />
		        <Route path="/stats" component={StatsContainer} />
		        <Route path="/user" exact component={Users} />
		        <Route path="/user/:username" component={User} />
		    </div>
		</Provider>
	</Router>,
	document.getElementById('app')
);