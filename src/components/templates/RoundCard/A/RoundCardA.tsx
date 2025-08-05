import React from 'react';
import styles from './RoundCardA.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type RoundCardA = {
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    borderWeight?: number;
    borderColor?: string;
};

const RoundCardA = ({ topContent, bottomContent, borderWeight = 3, borderColor }: RoundCardA) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--borderWeight': `${borderWeight}px`,
        '--borderColor': borderColor,
    };
    return (
        <div className={styles.container} style={cssVariables}>
            <div className={styles.innerContainer}>
                <div className={styles.flex}>{topContent}</div>
                <div className={styles.line} />
                <div className={styles.flex}>{bottomContent}</div>
            </div>
        </div>
    );
};
export default RoundCardA;
