import React from 'react';
import ButtonU from '../../../Button/U/ButtonU';
import { IoIosArrowForward } from 'react-icons/io';
import { useMonthPickerA } from '../MonthPickerA';

type NextMonthProps = {
    onButtonClick: (value: Date) => void;
};

const NextMonth = ({ onButtonClick }: NextMonthProps) => {
    const { pickerValue } = useMonthPickerA();

    const handleClick = () => {
        const base = pickerValue ?? new Date(); // 현재 값 없으면 오늘 기준
        const nextMonth = new Date(base.getFullYear(), base.getMonth() + 1, 1); // 다음달 1일
        onButtonClick(nextMonth);
    };

    return (
        <ButtonU size="2xs" radius={8} borderColor="#D5D5D5" onClick={handleClick}>
            <IoIosArrowForward />
        </ButtonU>
    );
};

export default NextMonth;
