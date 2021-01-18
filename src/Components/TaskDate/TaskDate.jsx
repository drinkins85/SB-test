import React, { useMemo } from 'react';
import { getWeeksCount } from '../../helpers/helpers';

import './TaskDate.css';

export default function TaskDate({ dateStart, dateFinish, localeOptions = {} }) {
    const defaultOptions = {
        month: 'short',
        day: 'numeric',
    };

    const deadlineFailed = dateFinish < new Date();
    const weeksCount = useMemo(() => getWeeksCount(dateStart, dateFinish), [dateFinish, dateStart])

    return (
        <div className="TaskDate">
            <div className="TaskDate-Start">
                {dateStart.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </div>
            <div className={`TaskDate-Finish ${deadlineFailed ? 'TaskDate__Finish_failed' : ''}`}>
                {dateFinish.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </div>
            <div className={`TaskDate-Weeks ${deadlineFailed ? 'TaskDate__Weeks_failed' : ''}`}>
                {weeksCount}
            </div>
        </div>
    )
}
