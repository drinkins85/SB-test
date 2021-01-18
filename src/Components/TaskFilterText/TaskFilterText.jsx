import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function TaskFilterText({ value, placeholder, onChange }) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <TextField
            fullWidth
            defaultValue={value}
            placeholder={placeholder}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            onBlur={handleChange}
        />
    );
}
