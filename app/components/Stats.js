import React, { Component } from 'react';
import ToDo from './ToDo.js'

const Stats = (props) => {
	const { todos } = props;
	const taskDone = todos.filter((item) => item.get('isDone') == true);
	const taskNotDone = todos.filter((item) => item.get('isDone') != true);

	const countTasks = todos.size;
	const countTasksDone = taskDone.size;
	const countTasksNotDone = taskNotDone.size;

	return <div className="stats">
		All tasks: <span>{countTasks}</span>
		
		{
			!!countTasksDone &&
			<div>
				<h2>Done – {countTasksDone}:</h2>
				{taskDone.map(item => (
					<li key={item.get('id')} className='todo__item'>
						<ToDo text={item.get('text')} />
					</li>
				))}
			</div>
		}
		{
			!!countTasksNotDone &&
			<div>
				<h2>NOT Done – {countTasksNotDone}:</h2>
				{taskNotDone.map(item => (
					<li key={item.get('id')} className='todo__item'>
						<ToDo text={item.get('text')} />
					</li>
				))}
			</div>
		}
	</div>
};

export default Stats;
