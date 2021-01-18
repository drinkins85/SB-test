import React from 'react';
import Task from '../Task/Task';

import './TaskList.css';

export default function TaskList({ tasks }) {

    // вынести в хэлпер
    function getNewTasksByStatus(tasks, status) {
        return tasks.reduce((count, task) => task.status === status ? count + 1 : count, 0);
    }

    function getFailedTasksCount(tasks) {
        return tasks.reduce((count, task) => task.deadline < new Date() ? count + 1 : count, 0);
    }

    return <div className="TaskList">
        <div className="TaskList-Header">
            <div className="TaskList-Title">
                <span className="TaskList-MainTitle">Поручения</span> (ручные)
            </div>
            <div className="TaskList-New">
                Новых: {getNewTasksByStatus(tasks, 'Новая')}
            </div>
            <div className="TaskList-Failed">
                Просроченных: {getFailedTasksCount(tasks)}
            </div>
        </div>
        <div className="TaskList-Items">
            {
                tasks.map( task => {
                    return (
                        <div className="TaskList-Item" key={task.id}>
                            <Task task={task} />
                        </div>
                    );
                })
            }
        </div>
    </div>
}
