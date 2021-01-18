import React from 'react';
import Accordion from '../Accordion/Accordion';
import RadioGroup from '../RadioGroup/RadioGroup';
import TaskFilterSelect from '../TaskFilterSelect/TaskFilterSelect';
import TaskFilterText from '../TaskFilterText/TaskFilterText';

import './TaskFilter.css';

export default function TaskFilter({ filterOptions }) {
    const { status } = filterOptions;
    const { type } = filterOptions;
    const { closeType } = filterOptions;
    const { title } = filterOptions;

    return (
        <div className="TaskFilter">
            <Accordion title="Фильтр">
                <div className="TaskFilter-Group">По статусу</div>
                <RadioGroup name="filterStatus" items={status.values} selected={status.current} onSelect={status.onChange} />
                <div className="TaskFilter-Group">Как завершена задача</div>
                <TaskFilterSelect
                    options={closeType.values}
                    selected={closeType.current}
                    placeholder="Любым образом"
                    onChange={closeType.onChange}
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
