import React, { useMemo } from 'react';
import Task from '../Task/Task';
import { getCountByKey } from '../../helpers/helpers';

import './TaskList.css';

export default function TaskList({ tasks }) {
    function getNewTaskCount(tasks) {
        return getCountByKey(tasks, 'status', 'Новая')
    }

    function getFailedTasksCount(tasks) {
        return tasks.reduce((count, task) => task.deadline < new Date() ? count + 1 : count, 0);
    }

    const newTaskCount = useMemo(() => getNewTaskCount(tasks), [tasks])

    return <div className="TaskList">
        <div className="TaskList-Header">
            <div className="TaskList-Title">
                <span className="TaskList-MainTitle">Поручения</span> (ручные)
            </div>
            <div className="TaskList-New">
                Новых: {newTaskCount}
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
