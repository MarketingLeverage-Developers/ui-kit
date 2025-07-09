import Dropdown from '@/headless/Dropdown/Dropdown';
import styles from './Display.module.scss';
import React from 'react';
import { useCalendarA } from '../CalendarA';
import moment from 'moment';
import classNames from 'classnames';
import { isDate } from 'lodash';

type DisplayProps = React.HTMLAttributes<HTMLButtonElement> & {
    type?: 'A' | 'B';
};

const Display = ({ type }: DisplayProps) => {
    const { calendarValue } = useCalendarA();

    const combinedStyles = classNames(styles.default, {
        [styles.CalendarA]: type === 'A',
    });

    const renderDisplayText = () => {
        if (!calendarValue) return '날짜 선택';

        if (isDate(calendarValue)) {
            return moment(calendarValue).format('YYYY/MM/DD (dd)');
        }

        const { from, to } = calendarValue;

        if (from && to) {
            return `${moment(from).format('YYYY/MM/DD (dd)')} ~ ${moment(to).format('YYYY/MM/DD (dd)')}`;
        }

        if (from) {
            return moment(from).format('YYYY/MM/DD (dd)');
        }

        return '날짜 선택';
    };

    return (
        <div className={combinedStyles}>
            <Dropdown.Trigger>{renderDisplayText()}</Dropdown.Trigger>
        </div>
    );
};

export default Display;
