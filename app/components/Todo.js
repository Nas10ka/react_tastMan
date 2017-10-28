import React from 'react';

const ToDo = (props) => {
	const { isDone, text } = props;
	if(isDone) {
		return <strike>{text}</strike>;
	} else {
		return <span>{text}</span>;
	}
};

export default ToDo;