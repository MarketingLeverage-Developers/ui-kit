import React, { useEffect, useState } from 'react';
import { DayPicker, useDayPicker, useNavigation } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import styles from './CalendarA.module.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import 'react-day-picker/style.css';

type CalendarAProps = {
    value: Date | undefined;
    onChangeDate: (value: Date) => void;
};

const CalendarA = ({ value, onChangeDate }: CalendarAProps) => {
    return (
        <DayPicker
            required
            captionLayout="dropdown"
            navLayout="after"
            locale={ko}
            mode="single"
            selected={value}
            onSelect={onChangeDate}
            showOutsideDays
            components={{ PreviousMonthButton, NextMonthButton }}
            footer={
                <div className={styles.Legend}>
                    <div className={styles.Item}>
                        <span className={styles.DotToday}></span>
                        <span>오늘 날짜</span>
                    </div>
                    <div className={styles.Item}>
                        <span className={styles.DotSelected}></span>
                        <span>선택한 날짜</span>
                    </div>
                </div>
            }
        />
    );
};

export default CalendarA;

export const PreviousMonthButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { previousMonth, goToMonth } = useDayPicker();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!previousMonth) {
            return;
        }
        props.onClick?.(e);
        goToMonth(previousMonth);
    };

    return (
        <button type="button" {...props} onClick={handleClick} className={styles.NavButton}>
            <MdKeyboardArrowLeft className={styles.Icon} />
        </button>
    );
};
export const NextMonthButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { nextMonth, goToMonth } = useDayPicker();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!nextMonth) return null;
        props.onClick?.(e);
        goToMonth(nextMonth);
    };

    return (
        <button type="button" {...props} onClick={handleClick} className={styles.NavButton}>
            <MdKeyboardArrowRight className={styles.Icon} />
        </button>
    );
};
