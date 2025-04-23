import React from 'react';
import styles from './MaxWidth.module.scss';

type MaxWidthProps = {
    children: React.ReactNode;
    maxWidth?: number;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const MaxWidth = ({ maxWidth = 1280, children }: MaxWidthProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--max-width': `${maxWidth}px`,
    };

    return (
        <div className={styles.MaxWidth} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default MaxWidth;
