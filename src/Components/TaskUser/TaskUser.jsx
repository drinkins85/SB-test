import React from 'react';
import './TaskUser.css';

function getTypeLabel(type) {
    switch (type) {
        case 'author': return 'Автор';
        case 'assignee': return 'Исполнитель';
    }
}

export default function TaskUser({ user, type }) {
    const { name } = user;

    return (
        <div className={`TaskUser TaskUser_type_${type}`}>
            <div className="TaskUser-Avatar">{name[0]}</div>
            <div className="TaskUser-Name">{name}</div>
            <div className="TaskUser-Type">{getTypeLabel(type)}</div>
        </div>
    )
}
