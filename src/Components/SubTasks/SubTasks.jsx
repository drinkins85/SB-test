import React from 'react';
import './SubTasks.css'



export default function SubTasks({ subtasks }) {

    function getTasksCountByStatus(subtasks, status) {
        return subtasks.reduce((count, subtask) => subtask.status === status ? count + 1 : count, 0);
    }

    const newSubtasksCount = getTasksCountByStatus(subtasks, 'Новая');
    const inProgressSubtasksCount = getTasksCountByStatus(subtasks, 'В работе');
    const closedSubtasksCount = getTasksCountByStatus(subtasks, 'Завершена');

    return (
        <div className="SubTasks">
            <div className="SubTasks-Label SubTasks-Icon SubTasks-Icon_type_list">Задачи: </div>
            {
                newSubtasksCount && (
                    <div className="SubTasks-New SubTasks-Icon SubTasks-Icon_type_new" title="Новая">
                        {newSubtasksCount}</div>
                    )
            }
            {
                inProgressSubtasksCount && (
                    <div className="SubTasks-InProgress SubTasks-Icon SubTasks-Icon_type_inProgress" title="В работе">
                        {inProgressSubtasksCount}
                    </div>
                )
            }
            {
                closedSubtasksCount && (
                    <div className="SubTasks-Closed SubTasks-Icon SubTasks-Icon_type_closed" title="Завершена">
                        {closedSubtasksCount}
                    </div>
                )
            }
        </div>
    )
}
