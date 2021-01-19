import React from 'react';
import Accordion from '../Accordion/Accordion';
import RadioGroup from '../RadioGroup/RadioGroup';
import { shallowEqual } from '../../helpers/helpers';

import './TaskGroupBy.css';

function TaskGroupBy({ items, selected, onChange}) {
    return (
        <div className="TaskGroupBy">
            <Accordion title="Группировка по">
                <RadioGroup name="groupBy" items={items} selected={selected} onSelect={onChange} />
            </Accordion>
        </div>
    )
}

function propsAreEqual(next, prev) {
    return shallowEqual(prev, next);
}

export default React.memo(TaskGroupBy, propsAreEqual)
