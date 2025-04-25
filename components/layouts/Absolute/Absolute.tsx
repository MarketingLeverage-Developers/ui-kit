import React from 'react';
import { CSSPropertiesWithVars } from '../../types';
import styles from './Absolute.module.scss';

type AbsoluteProps = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    children: React.ReactNode;
};

const Absolute = ({ top, left, bottom, right, children }: AbsoluteProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--top': `${top}px`,
        '--left': `${left}px`,
        '--bottom': `${bottom}px`,
        '--right': `${right}px`,
    };

    return (
        <div className={styles.Absolute} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Absolute;
