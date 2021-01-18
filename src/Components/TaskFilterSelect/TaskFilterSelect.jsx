import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function TaskFilterSelect({ options, selected, onChange, placeholder, reset }) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <Select value={selected} fullWidth displayEmpty onChange={handleChange} >
            {
                placeholder && <MenuItem value=''>{selected && reset ? reset : placeholder}</MenuItem>
            }
            {
                options.map((option) => {
                    const value = typeof option === 'object' ? option.value : option;
                    const name = typeof option === 'object' ? option.name : option;

                    return <MenuItem value={value} key={value} >{name}</MenuItem>
                })
            }
        </Select>
    );
}
