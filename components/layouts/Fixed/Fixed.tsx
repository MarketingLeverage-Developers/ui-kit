import React from 'react';
import styles from './Fixed.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/types';

type FixedProps = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    children: React.ReactNode;
};

const Fixed = ({ top, left, bottom, right, children }: FixedProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--top': `${top}px`,
        '--left': `${left}px`,
        '--bottom': `${bottom}px`,
        '--right': `${right}px`,
    };

    return (
        <div className={styles.Fixed} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Fixed;
