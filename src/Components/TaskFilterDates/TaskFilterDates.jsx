import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DateFnsUtils from '@date-io/date-fns';

import './TaskFilterDates.css';



export default function TaskFilterDates({ dateFrom, dateTo, onDateFromChange, onDateToChange }) {
    return (
        <div className="TaskFilterDates">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="TaskFilterDates-Start">
                    <DatePicker
                        disableToolbar
                        variant="inline"
                        value={dateFrom}
                        onChange={onDateFromChange}
                        emptyLabel="Выбрать от"
                        format="dd.MM.yy"
                        maxDate={dateTo}
                    />
                </div>
                <div className="TaskFilterDates-Finish">
                    <DatePicker
                        disableToolbar
                        variant="inline"
                        value={dateTo}
                        onChange={onDateToChange}
                        emptyLabel="Выбрать до"
                        format="dd.MM.yy"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        minDate={dateFrom}
                    />
                </div>
            </MuiPickersUtilsProvider>
        </div>
    )
}
