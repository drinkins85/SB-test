import React, { useState, useMemo } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskGroupBy from '../TaskGroupBy/TaskGroupBy';
import TaskFilter from '../TaskFilter/TaskFilter';

import './TaskManager.css';

const groupByItems = [
    { name: 'Типу', value: 'type' },
    { name: 'Автору', value: 'author' },
    { name: 'Статусу', value: 'status' },
];

const filterStatusValues = ['Все', 'Новая', 'В работе', 'Завершена'];

const filterTypeValues = [
    { name: 'Совещание отдела', value: 'Совещание отдела' },
    { name: 'Встреча', value: 'Встреча' },
    { name: 'Конференция', value: 'Конференция' },
];

const filterCloseTypeValues = ['Вручную', 'Автоматически'];

export default function TaskManager({ tasks }) {
    const [groupByField, setGroupBy] = useState('status');
    const [filterStatus, setFilterStatus] = useState('Все');
    const [filterType, setFilterType] = useState('');
    const [filterCloseType, setFilterCloseType] = useState('');
    const [filterTitle, setFilterTitle] = useState('');
    const [filterDateFrom, setFilterDateFrom] = useState(null);
    const [filterDateTo, setFilterDateTo] = useState(null);

    function getFilterFields(status, type, closeType, title, dateFrom, dateTo) {
        const options = {};

        if (status !== 'Все') {
            options['status'] = status;
        }

        if (type) {
            options['type'] = type;
        }

        if (closeType) {
            options['closeType'] = closeType;
        }

        if(title) {
            options['title'] = title;
        }

        if (dateFrom && dateTo) {
            options['date'] = { from: dateFrom, to: dateTo }
        }

        return options;
    }

    const filter = useMemo(
        () => getFilterFields(
            filterStatus,
            filterType,
            filterCloseType,
            filterTitle,
            filterDateFrom,
            filterDateTo
        ),
        [
            filterStatus,
            filterType,
            filterCloseType,
            filterTitle,
            filterDateFrom,
            filterDateTo,
        ]
    );

    function taskFilter(tasks, filter) {
        const regExp = new RegExp(`^${filterTitle}`, 'i');

        return tasks.filter((task) => {
            for (let key in filter) {
                if (!filter.hasOwnProperty(key)) {
                    continue;
                }

                if (key === 'title' && regExp.test(task.title)) {
                    continue;
                }

                if (key === 'date') {
                    if (task.deadline >= filter.date.from && task.deadline <= filter.date.to ||
                    task.date <= filter.date.to && task.date >= filter.date.from ||
                    task.date <= filter.date.from && task.deadline >= filter.date.to ||
                    task.date >= filter.date.from && task.deadline <= filter.date.to
                    ) {
                        continue;
                    }
                }

                if (task[key] !== filter[key]) {
                    return false;
                }
            }

            return true;
        })
    }

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

    const filteredTasks = useMemo(() => taskFilter(tasks, filter), [tasks, filter]);
    const taskList = useMemo( () => groupBy(filteredTasks, groupByField), [filteredTasks, groupByField]);

    return (
        <div className="TaskManager">
            <div className="TaskManager-List">
                <TaskList tasks={taskList} />
            </div>
            <div className="TaskManager-Filter">
                <TaskGroupBy
                    items={groupByItems}
                    selected={groupByField}
                    onChange={setGroupBy}
                />
                <TaskFilter
                    status={{
                        values: filterStatusValues,
                        current: filterStatus,
                        onChange: setFilterStatus
                    }}
                    type={{
                        values: filterTypeValues,
                        current: filterType,
                        onChange: setFilterType
                    }}
                    closeType={{
                        values: filterCloseTypeValues,
                        current: filterCloseType,
                        onChange: setFilterCloseType,
                    }}
                    title={{
                        value: filterTitle,
                        onChange: setFilterTitle
                    }}
                    date={{
                        from: filterDateFrom,
                        to: filterDateTo,
                        onDateFromChange: setFilterDateFrom,
                        onDateToChange: setFilterDateTo,
                    }}
                />
            </div>
        </div>
    );
}
