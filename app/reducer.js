import { List, Map } from 'immutable';

const init = List([]);

// http://redux.js.org/docs/basics/Reducers.html
export default function(todos=init, action) {
	switch(action.type) {
		case 'ADD_TODO':
			// https://facebook.github.io/immutable-js/docs/#/List/push
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			// https://facebook.github.io/immutable-js/docs/#/List/map
			return todos.map(item => {
				if(item.get('id') === action.payload) {
					// https://facebook.github.io/immutable-js/docs/#/Map/update
					return item.update('isDone', isDone => !isDone);
				} else {
					return item;
				}
			});
		case 'REMOVE_TODO':
			return todos.filter( item => item.get('id') != action.payload );
		default:
			return todos;
	}
}