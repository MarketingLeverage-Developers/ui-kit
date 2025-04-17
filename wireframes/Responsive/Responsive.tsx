import React from 'react';
import styles from './Responsive.module.scss';

type ResponsiveProps = {
    children: React.ReactNode;
    responsive?: boolean;
    gap?: 0 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 150;
    align?: 'start' | 'center' | 'end';
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Responsive = ({ children, responsive, gap = 0, align = 'start' }: ResponsiveProps) => {
    const computedGap = `var(--space-${gap})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--gap': computedGap,
        '--align-items': align,
        '--responsive': responsive ? 'column' : 'row',
    };

    return (
        <div className={styles.Responsive} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Responsive;
