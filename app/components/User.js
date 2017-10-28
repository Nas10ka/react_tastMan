import React from 'react';

const User = (props) => {
	const {match} = props;
	return <div>
		<h1>I am {match.params.username}</h1>
	</div>

};

export default User;
