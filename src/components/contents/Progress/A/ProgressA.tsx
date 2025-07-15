import React from 'react';
import styles from './ProgressA.module.scss';
import { HexColor } from '@/ui-kit/src/types';

type ProgressAProps = {
    value: number; // 0 ~ 100 사이 숫자
    color?: HexColor;
};

const ProgressA: React.FC<ProgressAProps> = ({ value, color }) => {
    const clampedProgress = Math.min(100, Math.max(0, value));

    const cssVariables = {
        '--color': color,
    };

    return (
        <div className={styles.ProgressA}>
            <div className={styles.ProgressBar} style={{ width: `${clampedProgress}%`, ...cssVariables }} />
        </div>
    );
};

export default ProgressA;
