import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({title, children}) {
    const [opened, toggleState] = useState(true);

    function handleClick() {
        toggleState(!opened)
    }

    return (
        <div className={`Accordion ${ opened ? 'Accordion_opened' : ''}`}>
            <div className="Accordion-Title" onClick={handleClick}>{title}</div>
            <div className="Accordion-Body">{children}</div>
        </div>
    );
}
