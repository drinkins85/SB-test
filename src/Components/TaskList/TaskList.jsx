import React from 'react';
import Task from '../Task/Task';

import './TaskList.css';

export default function TaskList({ tasks }) {
    return <div className="TaskList">
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
}
