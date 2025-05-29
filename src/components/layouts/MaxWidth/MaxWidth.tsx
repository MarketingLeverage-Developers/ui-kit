import React, { HTMLAttributes } from 'react';
import styles from './MaxWidth.module.scss';

type MaxWidthProps = {
    children: React.ReactNode;
    maxWidth?: number;
} & HTMLAttributes<HTMLDivElement>;

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const MaxWidth = ({ maxWidth = 1280, children, ...props }: MaxWidthProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--max-width': `${maxWidth}px`,
    };

    return (
        <div {...props} className={styles.MaxWidth} style={{ ...cssVariables, ...props.style }}>
            {children}
        </div>
    );
};

export default MaxWidth;
