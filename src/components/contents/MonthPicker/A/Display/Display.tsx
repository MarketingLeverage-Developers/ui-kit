import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';
import styles from './Display.module.scss';
import React from 'react';
import moment from 'moment';
import { useMonthPickerA } from '../MonthPickerA';
import { MdDateRange } from 'react-icons/md';

type DisplayProps = React.HTMLAttributes<HTMLButtonElement> & {};

const Display = ({}: DisplayProps) => {
    const { pickerValue } = useMonthPickerA();
    const { toggleDropdown } = useDropdown();
    return (
        <Dropdown.Trigger className={styles.Display}>
            {/* 이전코드 */}
            {/* <MdDateRange /> {moment(pickerValue).format('YYYY. MM')} */}
            <MdDateRange /> {pickerValue ? moment(pickerValue).format('YYYY. MM') : ''}
        </Dropdown.Trigger>
    );
};

export default Display;
