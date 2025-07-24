import React, { useState } from 'react';
import styles from './MonthPicker.module.scss';
import Dropdown from '@/headless/Dropdown/Dropdown';

type Props = {
    onChange: (date: Date) => void;
    value?: Date;
    initialYear?: number;
};

const MonthPicker = ({ onChange, value, initialYear }: Props) => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(initialYear ?? currentYear);

    const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

    const handlePrevYear = () => setYear((prev) => prev - 1);
    const handleNextYear = () => setYear((prev) => prev + 1);

    const isSameMonth = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

    return (
        <Dropdown.Content className={styles.Content}>
            <div className={styles.wrapper}>
                <div className={styles.yearControl}>
                    <button className={styles.yearButton} onClick={handlePrevYear}>
                        ◀
                    </button>
                    <span>{year}년</span>
                    <button className={styles.yearButton} onClick={handleNextYear}>
                        ▶
                    </button>
                </div>

                <div className={styles.monthGrid}>
                    {months.map((month) => (
                        <button
                            key={month.toISOString()}
                            onClick={() => onChange(month)}
                            className={`${styles.monthButton} ${
                                value && isSameMonth(month, value) ? styles.active : ''
                            }`}
                        >
                            {month.toLocaleDateString('ko-KR', { month: 'long' })}
                        </button>
                    ))}
                </div>
            </div>
        </Dropdown.Content>
    );
};

export default MonthPicker;
