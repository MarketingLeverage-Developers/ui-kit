import React, { useState } from 'react';
import styles from './Picker.module.scss';
import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import classNames from 'classnames';

type Props = {
    onChange: (date: Date) => void;
    value?: Date;
    initialYear?: number;
};

const Picker = ({ onChange, value, initialYear }: Props) => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(initialYear ?? currentYear);
    const { closeDropdown } = useDropdown();

    const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

    const handlePrevYear = () => setYear((prev) => prev - 1);
    const handleNextYear = () => setYear((prev) => prev + 1);

    const isSameMonth = (a: Date, b: Date) => {
        console.log('테스트', a, b);
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
    };

    return (
        <Dropdown.Content className={styles.Content}>
            <div className={styles.wrapper}>
                <div className={styles.yearControl}>
                    <IoIosArrowBack onClick={handlePrevYear} cursor="pointer" />
                    <span>{year}년</span>
                    <IoIosArrowForward onClick={handleNextYear} cursor="pointer" />
                </div>

                <div className={styles.monthGrid}>
                    {months.map((month) => (
                        <button
                            key={month.toISOString()}
                            onClick={() => {
                                onChange(month);
                                closeDropdown();
                            }}
                            className={classNames(styles.monthButton, {
                                [styles.active]: value && isSameMonth(month, value),
                            })}
                        >
                            {month.toLocaleDateString('ko-KR', { month: 'long' })}
                        </button>
                    ))}
                </div>
            </div>
        </Dropdown.Content>
    );
};

export default Picker;
