import React from 'react';
import TaskDate from '../TaskDate/TaskDate';
import TaskUser from '../TaskUser/TaskUser';
import SubTasks from '../SubTasks/SubTasks';

import './Task.css'

export default function Task({ task }) {
    const { id, type, title, date, deadline, author, assignee, status, subtasks } = task;

    function getBadgeType(type) {
        switch (type) {
            case "Совещание отдела": return 'discuss'
            case "Встреча": return 'meeting'
            case "Конференция": return 'conf'
        }
    }

    const hasSubtasks = subtasks && subtasks.length > 0;

    return (
        <div className={`Task ${hasSubtasks ? 'Task_subtasks' : '' }`}>
            <div className="Task-Main">
                <span className="Task-Id">ID {id}</span>
                <span className="Task-Type" >Поручение</span>
                <span className={`Task-Badge Task-Badge_type_${getBadgeType(type)}`} >{type}</span>
                <div className="Task-TitleContainer">
                    <h3 className="Task-Title">{title}</h3>
                   <TaskDate dateStart={date} dateFinish={deadline} />
                </div>
                <div className="Task-Info">
                    <div className="Task-Users">
                        <div className="Task-Author">
                            <TaskUser user={author} type="author" />
                        </div>
                        <div className="Task-Assignee">
                            <TaskUser user={assignee} type="assignee" />
                        </div>
                    </div>
                    <div className="Task-Status">
                        {status}
                    </div>
                </div>
            </div>
            {
                hasSubtasks && (
                    <div className="Task-Subtasks">
                        <SubTasks subtasks={subtasks} />
                    </div>
                )
            }
        </div>

    );
}
