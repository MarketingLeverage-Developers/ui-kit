import Dropdown from '@/headless/Dropdown/Dropdown';
import styles from './Display.module.scss';
import React from 'react';
import { useCalendarA } from '../CalendarA';
import moment from 'moment';
import classNames from 'classnames';

type DisplayProps = React.HTMLAttributes<HTMLButtonElement> & {
    type?: 'A' | 'B';
};

const Display = ({ type }: DisplayProps) => {
    const { calendarValue } = useCalendarA();

    const combinedStyles = classNames(styles.default, {
        [styles.CalendarA]: type === 'A',
    });

    return (
        <div className={combinedStyles}>
            <Dropdown.Trigger>
                {calendarValue ? moment(calendarValue).format('YYYY/MM/DD (dd)') : '날짜 선택'}
            </Dropdown.Trigger>
        </div>
    );
};

export default Display;
