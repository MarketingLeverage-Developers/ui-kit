import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import styles from './CalendarA.module.scss';

const CalendarA = () => {
    const [selected, setSelected] = useState<Date>();

    return (
        <div className={styles.wrapper}>
            <DayPicker
                captionLayout="dropdown"
                locale={ko}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                showOutsideDays
                footer={
                    <div className={styles.legend}>
                        <span className={styles.dotToday}></span> 오늘 날짜
                        <span className={styles.dotSelected}></span> 선택한 날짜
                    </div>
                }
                classNames={{
                    root: styles.calendarRoot,
                    month: styles.month,
                    caption: styles.caption,
                    nav: styles.nav,
                    nav_button: styles.navButton,
                    table: styles.table,
                    head_row: styles.head_row,
                    head_cell: styles.head_cell,
                    row: styles.row,
                    cell: styles.cell,
                    day: styles.day,
                    day_selected: styles.day_selected,
                    day_today: styles.day_today,
                }}
            />
        </div>
    );
};

export default CalendarA;
