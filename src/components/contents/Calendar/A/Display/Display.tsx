import Dropdown from '@/headless/Dropdown/Dropdown';
import React from 'react';
import { useCalendarA } from '../CalendarA';
import moment from 'moment';

const Display = () => {
    const { calendarValue } = useCalendarA();

    return <Dropdown.Trigger>{moment(calendarValue).format('YYYY/MM/DD (dd)')}</Dropdown.Trigger>;
};

export default Display;
