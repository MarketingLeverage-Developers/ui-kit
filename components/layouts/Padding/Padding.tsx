import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import { SpaceSize } from '../../../types/types';

type BoxProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    x?: SpaceSize;
    y?: SpaceSize;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Box = ({ x = 0, y = 0, children, ...props }: BoxProps) => {
    const computedBoxY = `var(--space-${y})`;
    const computedBoxX = `var(--space-${x})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--padding-y': computedBoxY,
        '--padding-x': computedBoxX,
    };

    return (
        <div {...props} className={styles.Box} style={{ ...cssVariables, ...props.style }}>
            {children}
        </div>
    );
};

export default Box;
