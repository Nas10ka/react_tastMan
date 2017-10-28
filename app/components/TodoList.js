import React, { Component } from 'react';
import ToDo from './Todo.js'
import {v4} from 'uuid'

const TodoList = (props) => {
	const { todos, toggleTodo, addTodo, removeTodo } = props;

	const onSubmit = (event) => {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which == 13);
		const isLongEnough = text.length > 0;

		if(isEnterKey && isLongEnough) {
			input.value = '';
			addTodo(text);
		}
	};

	const toggleClick = id => event => toggleTodo(id);
	const removeClick = id => event => removeTodo(id);
	
	return (
		<div className='todo'>
			<input type='text' placeholder='Add todo' onKeyDown={onSubmit} />
			<ul className='todo__list'>
				{todos.map(item => (
					<li key={item.get('id')} className='todo__item' onClick={toggleClick(item.get('id'))}>
						<span onClick={removeClick(item.get('id'))}>[X]</span>
						<ToDo isDone={item.get('isDone')} text={item.get('text')} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;