import React from 'react';
import './RadioGroup.css';

export default function RadioGroup({ items, selected, onSelect, name }) {
    return (
        <div className="RadioGroup">
            {
                items.map((item) => (
                    <label
                        className={`RadioGroup-Label ${item.value === selected ? 'RadioGroup-Label_checked' : ''}`}
                        key={item.value}
                    >
                        <input
                            className="RadioGroup-Input"
                            type="radio"
                            name={name}
                            checked={item.value === selected}
                            onChange={() => onSelect(item.value)}
                            value={item.value}
                        />
                        {item.name}
                    </label>
                ))
            }
        </div>
    );
}
