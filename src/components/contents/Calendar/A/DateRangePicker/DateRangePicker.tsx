import React, { useEffect, useState } from 'react';
import { DayPicker, DateRange, useDayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import styles from '../DatePicker/DatePicker.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import classNames from 'classnames';
import { useCalendarA } from '../CalendarA';
import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';

type DateRangePickerProps = {
    onChangeDateRange: (value: DateRange | undefined) => void;
};

const DateRangePicker = ({ onChangeDateRange }: DateRangePickerProps) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const { calendarValue, setCalendarValue } = useCalendarA();
    const handleSelect = (range: DateRange | undefined) => {
        setCalendarValue(range);
        onChangeDateRange(range);
    };

    const { dropdownValue } = useDropdown();

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    const range = calendarValue as DateRange;

    useEffect(() => {
        console.log('초기화 ', calendarValue);
    }, [calendarValue]);

    return (
        <Dropdown.Content className={combinedStyle}>
            <DayPicker
                mode="range"
                selected={range as DateRange}
                onSelect={handleSelect}
                numberOfMonths={2}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                locale={ko}
                showOutsideDays
                captionLayout="dropdown"
                navLayout="after"
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
            {/* <div className={styles.RangeSummary}>
                {range?.from && range?.to ? (
                    <p>
                        선택한 범위: {range.from.toLocaleDateString()} ~ {range.to.toLocaleDateString()}
                    </p>
                ) : (
                    <p>날짜 범위를 선택하세요.</p>
                )}
            </div> */}
        </Dropdown.Content>
    );
};

export default DateRangePicker;

// 이전 달 버튼
export const PreviousMonthButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { previousMonth, goToMonth } = useDayPicker();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!previousMonth) return;
        props.onClick?.(e);
        goToMonth(previousMonth);
    };

    return (
        <button type="button" {...props} onClick={handleClick} className={styles.NavButton}>
            <MdKeyboardArrowLeft className={styles.Icon} />
        </button>
    );
};

// 다음 달 버튼
export const NextMonthButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { nextMonth, goToMonth } = useDayPicker();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!nextMonth) return;
        props.onClick?.(e);
        goToMonth(nextMonth);
    };

    return (
        <button type="button" {...props} onClick={handleClick} className={styles.NavButton}>
            <MdKeyboardArrowRight className={styles.Icon} />
        </button>
    );
};
