import React, { useMemo } from 'react';
import { getCountByKey } from '../../helpers/helpers';

import './SubTasks.css'

export default function SubTasks({ subtasks }) {
    const newSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status','Новая'),
        [subtasks]
    );
    const inProgressSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status', 'В работе'),
        [subtasks]
    );
    const closedSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status', 'Завершена'),
        [subtasks]
    );

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
