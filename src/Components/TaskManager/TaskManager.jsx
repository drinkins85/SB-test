import React from 'react';
import TaskList from '../TaskList/TaskList';

import './TaskManager.css';

export default function TaskManager({ tasks }) {
    return (
        <div className="TaskManager">
            <div className="TaskManager-List">
                <TaskList tasks={tasks} />
            </div>
            <div className="TaskManager-Filter">Filter</div>
        </div>
    );
}
