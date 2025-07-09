// CalendarA.js
import React, { createContext, HTMLAttributes, useContext, useEffect, useState } from 'react';
import DatePicker from './DatePicker/DatePicker';
import Display from './Display/Display';
import Dropdown from '@/headless/Dropdown/Dropdown';
import Today from './Today/Today';
import PrevDay from './PrevDay/PrevDay';
import NextDay from './NextDay/NextDay';
import DateRangePicker from './DateRangePicker/DateRangePicker';
import { DateRange } from 'react-day-picker';
import RangeSelect from './RangeSelect/RangeSelect';

type CalendarAContextType = {
    calendarValue: Date | DateRange | undefined;
    setCalendarValue: React.Dispatch<React.SetStateAction<Date | DateRange | undefined>>;
    range: DateRange | undefined;
    setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
};

const CalendarAContext = createContext<CalendarAContextType>({
    calendarValue: undefined,
    setCalendarValue: () => {},
    range: undefined,
    setRange: () => {},
});

type CalendarAProps = {
    children: React.ReactNode;
    defaultValue: Date | DateRange | undefined;
} & Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;

const CalendarA = ({ defaultValue, children, ...props }: CalendarAProps) => {
    const [calendarValue, setCalendarValue] = useState<Date | DateRange | undefined>(defaultValue ?? undefined);
    const [range, setRange] = useState<DateRange | undefined>(undefined);

    useEffect(() => {
        console.log('초기화 ', calendarValue);
        setCalendarValue(defaultValue);
    }, [defaultValue]);

    return (
        <CalendarAContext.Provider value={{ calendarValue, setCalendarValue, range, setRange }}>
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
CalendarA.DateRangePicker = DateRangePicker;
CalendarA.RangeSelect = RangeSelect;
