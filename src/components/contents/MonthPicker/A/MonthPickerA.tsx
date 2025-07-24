// MonthPickerA.js
import Dropdown from '@/headless/Dropdown/Dropdown';
import React, { createContext, HTMLAttributes, useContext, useEffect, useState } from 'react';
import Display from './Display/Display';
import Picker from './Picker/Picker';
import ThisMonth from './ThisMonth/ThisMonth';
import PrevMonth from './PrevMonth/PrevMonth';
import NextMonth from './NextMonth/NextMonth';
import Flex from '../../../layouts/Flex/Flex';

type MonthPickerAContextType = {
    pickerValue: Date | undefined;
    setPickerValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const MonthPickerAContext = createContext<MonthPickerAContextType>({
    pickerValue: undefined,
    setPickerValue: () => {},
});

type MonthPickerAProps = {
    children: React.ReactNode;
    defaultValue: Date | undefined;
} & Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>;

const MonthPickerA = ({ defaultValue, children, ...props }: MonthPickerAProps) => {
    const [pickerValue, setPickerValue] = useState<Date | undefined>(defaultValue ?? undefined);

    useEffect(() => {
        console.log('초기화 ', pickerValue);
        setPickerValue(defaultValue);
    }, [defaultValue]);

    return (
        <MonthPickerAContext.Provider value={{ pickerValue, setPickerValue }}>
            <Dropdown>
                <Dropdown.Box style={props.style}>
                    <Flex gap={4}>{children}</Flex>
                </Dropdown.Box>
            </Dropdown>
        </MonthPickerAContext.Provider>
    );
};

export const useMonthPickerA = () => {
    return useContext(MonthPickerAContext);
};

export default MonthPickerA;

MonthPickerA.Display = Display;
MonthPickerA.Picker = Picker;
MonthPickerA.ThisMonth = ThisMonth;
MonthPickerA.PrevMonth = PrevMonth;
MonthPickerA.NextMonth = NextMonth;
