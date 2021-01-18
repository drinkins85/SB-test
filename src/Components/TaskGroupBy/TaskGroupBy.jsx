import React from 'react';
import Accordion from '../Accordion/Accordion';
import RadioGroup from '../RadioGroup/RadioGroup';

import './TaskGroupBy.css';

export default function TaskGroupBy({ items, selected, onChange}) {
    return (
        <div className="TaskGroupBy">
            <Accordion title="Группировка по">
                <RadioGroup name="groupBy" items={items} selected={selected} onSelect={onChange} />
            </Accordion>
        </div>
    )
}
