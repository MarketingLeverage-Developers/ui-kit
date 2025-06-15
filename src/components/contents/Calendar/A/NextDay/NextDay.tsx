import React from 'react';
import ButtonU from '../../../Button/U/ButtonU';
import { IoIosArrowForward } from 'react-icons/io';
import { useCalendarA } from '../CalendarA';

type NextDayProps = {
    onButtonClick: (value: Date) => void;
};

const NextDay = ({ onButtonClick }: NextDayProps) => {
    const { calendarValue } = useCalendarA();

    const navTo = (delta: number) => {
        const next = new Date(calendarValue as Date);
        next.setDate(next.getDate() + delta);

        const year = (calendarValue as Date).getFullYear();
        const lastDayOfYear = new Date(year, 11, 31);

        if (next.getTime() > lastDayOfYear.getTime()) {
            return;
        }

        onButtonClick(next);
    };

    return (
        <ButtonU size="2xs" radius={8} borderColor="#D5D5D5" onClick={() => navTo(+1)}>
            <IoIosArrowForward />
        </ButtonU>
    );
};

export default NextDay;
