// CalendarA.js
import React, { createContext, HTMLAttributes, useContext, useEffect, useState } from 'react';
import DatePicker from './DatePicker/DatePicker';
import Display from './Display/Display';
import Dropdown from '@/headless/Dropdown/Dropdown';
import Today from './Today/Today';
import PrevDay from './PrevDay/PrevDay';
import NextDay from './NextDay/NextDay';

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
    defaultValue: Date | undefined;
} & Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;

const CalendarA = ({ defaultValue, children, ...props }: CalendarAProps) => {
    const [calendarValue, setCalendarValue] = useState<Date | undefined>(defaultValue ?? undefined);

    useEffect(() => {
        console.log('초기화 ', calendarValue);
        setCalendarValue(defaultValue);
    }, [defaultValue]);

    return (
        <CalendarAContext.Provider value={{ calendarValue, setCalendarValue }}>
            <Dropdown>
                <Dropdown.Box style={props.style}>{children}</Dropdown.Box>
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
CalendarA.ToDay = Today;
CalendarA.PrevDay = PrevDay;
CalendarA.NextDay = NextDay;
