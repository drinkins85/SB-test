import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';
import TaskGroupBy from '../TaskGroupBy/TaskGroupBy';
import TaskFilter from '../TaskFilter/TaskFilter';

import './TaskManager.css';

export default function TaskManager({ tasks }) {
    const [groupByField, setGroupBy] = useState('status');
    const [filterStatus, setFilterStatus] = useState('Все');
    const [filterType, setFilterType] = useState('');
    const [filterCloseType, setFilterCloseType] = useState('');
    const [filterTitle, setFilterTitle] = useState('');

    const groupByValues = [
        { name: 'Типу', value: 'type' },
        { name: 'Автору', value: 'author' },
        { name: 'Статусу', value: 'status' },
    ];

    const filterOptions = {
        status: {
            values: [
                { name: 'Все', value: 'Все' },
                { name: 'Новая', value: 'Новая' },
                { name: 'В работе', value: 'В работе' },
                { name: 'Завершена', value: 'Завершена' },
            ],
            current: filterStatus,
            onChange: setFilterStatus
        },
        type: {
            values: [
                { name: 'Совещание отдела', value: 'Совещание отдела' },
                { name: 'Встреча', value: 'Встреча' },
                { name: 'Конференция', value: 'Конференция' },
            ],
            current: filterType,
            onChange: setFilterType
        },
        closeType: {
            values: ['Вручную', 'Автоматически'],
            current: filterCloseType,
            onChange: setFilterCloseType
        },
        title: {
            value: filterTitle,
            onChange: setFilterTitle
        }
    };

    const filter = {
        status: filterStatus,
        type: filterType,
        closeType: filterCloseType,
        title: filterTitle,
    }

    function taskFilter(tasks, filter) {
        const regExp = new RegExp(`^${filterTitle}`, 'i');

        return tasks.filter((task) => {
            for (let key in filter) {
                if (!filter.hasOwnProperty(key)) {
                    continue;
                }

                if (filter[key] === '' || filter[key] === 'Все') {
                    continue;
                }

                if (key === 'title' && regExp.test(task.title)) {
                    continue;
                }

                if (task[key] !== filter[key]) {
                    return false;
                }


            }

            return true;
        })
    }

    // memo
    function groupBy(tasks, field) {
        tasks.sort((a, b) => {
            let left = a[field];
            let right = b[field];

            if (field === 'author' || field === 'assignee') {
                left = a[field].name;
                right = b[field].name;
            }

            if (left === right) {
                return a['id'] > b['id'] ? 1 : -1;
            }

            return left > right ? 1 : -1;
        });

        return [...tasks];
    }

    return (
        <div className="TaskManager">
            <div className="TaskManager-List">
                <TaskList tasks={groupBy(taskFilter(tasks, filter), groupByField)} />
            </div>
            <div className="TaskManager-Filter">
                <TaskGroupBy items={groupByValues} selected={groupByField} onChange={setGroupBy} />
                <TaskFilter filterOptions={filterOptions} />
            </div>
        </div>
    );
}
