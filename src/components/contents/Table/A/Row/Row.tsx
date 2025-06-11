import React, { HTMLAttributes, MouseEventHandler } from 'react';
import styles from './Row.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type RowProps = HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
    bgColor?: HexColor;
};

const Row = ({ children, onMouseEnter, onMouseLeave, bgColor = '#fff', ...props }: RowProps) => {
    const variables: CSSPropertiesWithVars = {
        '--background-color': bgColor,
    };

    return (
        <tr
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
            className={styles.Row}
            style={{ ...variables }}
        >
            {children}
        </tr>
    );
};

export default Row;
