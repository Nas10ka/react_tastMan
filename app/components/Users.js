import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
	const {match} = props;
	return <div>
		<div><Link to={match.path +'/Vasia'}>Vasia</Link></div>
		<div><Link to={match.path +'/Tania'}>Tania</Link></div>
		<div><Link to={match.path +'/Sveta'}>Sveta</Link></div>
		<div><Link to={match.path +'/Mykola'}>Mykola</Link></div>
	</div>

};

export default Users;
