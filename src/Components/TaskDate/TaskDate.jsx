import React from 'react';
import './TaskDate.css';

export default function TaskDate({ dateStart, dateFinish, localeOptions = {} }) {
    const defaultOptions = {
        month: 'short',
        day: 'numeric',
    };

    //memo
    function getWeeksCount() {
        return Math.round((dateFinish - dateStart) / (7 * 24 * 60 * 60 * 1000));
    }

    const deadlineFailed = dateFinish < new Date();

    return (
        <div className="TaskDate">
            <div className="TaskDate-Start">
                {dateStart.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </div>
            <div className={`TaskDate-Finish ${deadlineFailed ? 'TaskDate__Finish_failed' : ''}`}>
                {dateFinish.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </div>
            <div className={`TaskDate-Weeks ${deadlineFailed ? 'TaskDate__Weeks_failed' : ''}`}>
                {getWeeksCount()}
            </div>
        </div>
    )
}
