import React from 'react';
import styles from './Responsive.module.scss';
import { dimensionToString } from '../../../utils';
import { SpaceSize } from '../../../types';

type ResponsiveProps = {
    children: React.ReactNode;
    responsive?: boolean;
    direction?: 'column' | 'row';
    gap?: SpaceSize;
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    width?: number | string;
    height?: number | string;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Responsive = ({
    children,
    responsive,
    direction = 'row',
    gap = 0,
    align = 'start',
    justify = 'start',
    width,
    height,
}: ResponsiveProps) => {
    const computedGap = `var(--space-${gap})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--gap': computedGap,
        '--align-items': align,
        '--flex-direction': direction,
        '--responsive': direction === 'column' ? (responsive ? 'row' : 'column') : responsive ? 'column' : 'row',

        '--justify-content': justify,
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
    };

    return (
        <div className={styles.Responsive} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Responsive;
