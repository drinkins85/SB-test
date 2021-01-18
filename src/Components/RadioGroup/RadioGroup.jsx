import React from 'react';
import './RadioGroup.css';

export default function RadioGroup({ items, selected, onSelect, groupName }) {
    function handleChange(event) {
        onSelect(event.target.value);
    }

    return (
        <div className="RadioGroup">
            {
                items.map((item) => {
                    const value = typeof item === 'object' ? item.value : item;
                    const name = typeof item === 'object' ? item.name : item;

                    return (
                        <label
                            className={`RadioGroup-Label ${value === selected ? 'RadioGroup-Label_checked' : ''}`}
                            key={value}
                        >
                            <input
                                className="RadioGroup-Input"
                                type="radio"
                                name={groupName}
                                checked={value === selected}
                                onChange={handleChange}
                                value={value}
                            />
                            {name}
                        </label>
                    );
                })
            }
        </div>
    );
}
