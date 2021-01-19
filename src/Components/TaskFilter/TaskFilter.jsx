import React from 'react';
import Accordion from '../Accordion/Accordion';
import RadioGroup from '../RadioGroup/RadioGroup';
import TaskFilterSelect from '../TaskFilterSelect/TaskFilterSelect';
import TaskFilterText from '../TaskFilterText/TaskFilterText';
import TaskFilterDates from '../TaskFilterDates/TaskFilterDates';
import { shallowEqual } from '../../helpers/helpers';

import './TaskFilter.css';

function TaskFilter({ status, type, closeType, title, date }) {
    return (
        <div className="TaskFilter">
            <Accordion title="Фильтр">
                <div className="TaskFilter-Group">По статусу</div>
                <RadioGroup groupName="filterStatus" items={status.values} selected={status.current} onSelect={status.onChange} />
                <div className="TaskFilter-Group">Как завершена задача</div>
                <TaskFilterSelect
                    options={closeType.values}
                    selected={closeType.current}
                    placeholder="Любым образом"
                    onChange={closeType.onChange}
                />
                <div className="TaskFilter-Group">По сроку</div>
                <TaskFilterDates
                    dateFrom={date.from}
                    dateTo={date.to}
                    onDateFromChange={date.onDateFromChange}
                    onDateToChange={date.onDateToChange}
                />
                <div className="TaskFilter-Group">Тип задачи</div>
                <TaskFilterSelect
                    options={type.values}
                    selected={type.current}
                    placeholder="Выберите тип задачи"
                    reset="Все"
                    onChange={type.onChange}
                />
                <div className="TaskFilter-Group">По описанию / причине</div>
                <TaskFilterText
                    value={title.value}
                    placeholder="Введите часть описания"
                    onChange={title.onChange}
                />
            </Accordion>
        </div>
    );
}

function filterOptionsAreEqual(prev, next) {
    return (
        shallowEqual(prev.status, next.status) &&
        shallowEqual(prev.type, next.type) &&
        shallowEqual(prev.closeType, next.closeType) &&
        shallowEqual(prev.title, next.title) &&
        shallowEqual(prev.date, next.date)
    );
}

export default React.memo(TaskFilter, filterOptionsAreEqual)
