import {v4} from 'uuid'

// http://redux.js.org/docs/basics/Actions.html

export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		payload: {
			id: v4(),
			isDone: false,
			text: text
		}
	};
}

export function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		payload: id
	}
}

export function removeTodo(id) {
	return {
		type: 'REMOVE_TODO',
		payload: id
	}
}