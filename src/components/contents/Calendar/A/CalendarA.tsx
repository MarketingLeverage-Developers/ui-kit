// CalendarA.js
import React, { createContext, useContext, useState } from 'react';
import DatePicker from './DatePicker/DatePicker';
import Display from './Display/Display';
import Dropdown from '@/headless/Dropdown/Dropdown';

type CalendarAContextType = {
    calendarValue: Date | undefined;
    setCalendarValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const CalendarAContext = createContext<CalendarAContextType>({
    calendarValue: undefined,
    setCalendarValue: () => {},
});

type CalendarAProps = {
    children: React.ReactNode;
};

const CalendarA = ({ children }: CalendarAProps) => {
    const [calendarValue, setCalendarValue] = useState<Date | undefined>(new Date());

    return (
        <CalendarAContext.Provider value={{ calendarValue, setCalendarValue }}>
            <Dropdown>
                <Dropdown.Box>{children}</Dropdown.Box>
            </Dropdown>
        </CalendarAContext.Provider>
    );
};

export const useCalendarA = () => {
    return useContext(CalendarAContext);
};

export default CalendarA;

CalendarA.Display = Display;
CalendarA.DatePicker = DatePicker;
