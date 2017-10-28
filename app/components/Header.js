import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return <header>
		<Link to="/">Home</Link>
		<span> | </span>
		<Link to="/todo">Todo</Link>
		<span> | </span>
		<Link to="/stats">Stats</Link>
		<span> | </span>
		<Link to="/user">Users</Link>
		<hr/>
	</header>
};

export default Header;
