import React from 'react';
import { DayPicker, useDayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import styles from './DatePicker.module.scss';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';
import { useCalendarA } from '../CalendarA';
import classNames from 'classnames';
// import 'react-day-picker/style.css';

type DatePickerProps = {
    // value: Date | undefined;
    onChangeDate: (value: Date) => void;
};

const DatePicker = ({ onChangeDate }: DatePickerProps) => {
    const { calendarValue, setCalendarValue } = useCalendarA();

    const { dropdownValue } = useDropdown();

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    const handleDateChange = (date: Date) => {
        onChangeDate(date);
        setCalendarValue(date);
    };

    return (
        <Dropdown.Content className={combinedStyle}>
            <DayPicker
                required
                captionLayout="dropdown"
                navLayout="after"
                locale={ko}
                mode="single"
                selected={calendarValue}
                onSelect={handleDateChange}
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
        </Dropdown.Content>
    );
};

export default DatePicker;

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
