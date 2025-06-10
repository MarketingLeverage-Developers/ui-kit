import React, { HTMLAttributes, MouseEventHandler } from 'react';
import styles from './Row.module.scss';

type RowProps = HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
};

const Row = ({ children, onMouseEnter, onMouseLeave, ...props }: RowProps) => {
    return (
        <tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props} className={styles.Row}>
            {children}
        </tr>
    );
};

export default Row;
