import { connect } from 'react-redux';
import TodoList  from './components/TodoList.js';
import Stats  from './components/Stats.js';
import { addTodo, toggleTodo, removeTodo } from './actions';


// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
export const TodoListContainer = connect(
	function mapStateToProps(state) {
		return { todos: state };
	},
	function mapDispatchToProps(dispatch) {
		return {
			addTodo: text => dispatch(addTodo(text)),
			toggleTodo: id => dispatch(toggleTodo(id)),
			removeTodo: id => dispatch(removeTodo(id))
		};
	}
)(TodoList);

export const StatsContainer = connect(
	(state) => {
		return { todos: state };
	}
)(Stats);