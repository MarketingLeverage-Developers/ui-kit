import React, { useEffect, useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import styles from './DateRangePicker.module.scss';
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
    const { dropdownValue, closeDropdown } = useDropdown();

    // ✅ 내부 상태
    const [internalRange, setInternalRange] = useState<DateRange | undefined>(calendarValue as DateRange);

    useEffect(() => {
        setInternalRange(calendarValue as DateRange); // 외부 상태 변경 시 내부 초기화
    }, [calendarValue]);

    const getMonthYear = (monthOffset: number) => {
        const date = new Date(currentMonth);
        date.setMonth(currentMonth.getMonth() + monthOffset);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    };

    const handleSelect = (range: DateRange | undefined) => {
        setInternalRange(range);
    };

    const handlePreviousMonth = () => {
        setCurrentMonth((prev) => {
            const newMonth = new Date(prev);
            newMonth.setMonth(newMonth.getMonth() - 1);
            return newMonth;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prev) => {
            const newMonth = new Date(prev);
            newMonth.setMonth(newMonth.getMonth() + 1);
            return newMonth;
        });
    };

    const handleApply = () => {
        setCalendarValue(internalRange);
        onChangeDateRange(internalRange);
        closeDropdown();
    };

    const handleReset = () => {
        setInternalRange(undefined);
        closeDropdown();
    };

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue,
        [styles.Closed]: !dropdownValue,
    });

    return (
        <Dropdown.Content className={combinedStyle}>
            <div className={styles.NavWrapper}>
                <button type="button" className={styles.NavButton} onClick={handlePreviousMonth}>
                    <MdKeyboardArrowLeft className={styles.Icon} />
                </button>
                <span className={styles.MonthText}>{getMonthYear(0)}</span>
                <span className={styles.MonthText}>{getMonthYear(1)}</span>
                <button type="button" className={styles.NavButton} onClick={handleNextMonth}>
                    <MdKeyboardArrowRight className={styles.Icon} />
                </button>
            </div>

            <DayPicker
                mode="range"
                selected={internalRange}
                onSelect={handleSelect}
                numberOfMonths={2}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                locale={ko}
                showOutsideDays
            />

            <div className={styles.Legend}>
                <span className={styles.RangeText}>
                    {internalRange?.from
                        ? `${internalRange.from.getFullYear()}.${(internalRange.from.getMonth() + 1)
                              .toString()
                              .padStart(2, '0')}.${internalRange.from.getDate().toString().padStart(2, '0')}`
                        : '시작일'}{' '}
                    ~{' '}
                    {internalRange?.to
                        ? `${internalRange.to.getFullYear()}.${(internalRange.to.getMonth() + 1)
                              .toString()
                              .padStart(2, '0')}.${internalRange.to.getDate().toString().padStart(2, '0')}`
                        : '종료일'}
                </span>

                <button type="button" className={styles.CancelButton} onClick={handleReset}>
                    취소
                </button>
                <button type="button" className={styles.ConfirmButton} onClick={handleApply}>
                    적용
                </button>
            </div>
        </Dropdown.Content>
    );
};

export default DateRangePicker;
