import React, { HTMLAttributes } from 'react';
import styles from './Padding.module.scss';

type PaddingProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    x?: number;
    y?: number;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Padding = ({ x = 0, y = 0, children, ...props }: PaddingProps) => {
    const computedPaddingY = `var(--space-${y})`;
    const computedPaddingX = `var(--space-${x})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--padding-y': computedPaddingY,
        '--padding-x': computedPaddingX,
    };

    return (
        <div className={styles.Padding} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Padding;
