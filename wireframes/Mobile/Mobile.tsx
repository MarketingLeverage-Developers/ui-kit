import React, { HTMLAttributes } from 'react';
import styles from './Mobile.module.scss';

type MobileProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    flex?: number;
    justify?: 'center' | 'space-between' | 'space-around' | 'start' | 'end';
    align?: 'start' | 'center' | 'end';
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Mobile = ({ flex = 1, justify = 'start', align = 'center', children, ...props }: MobileProps) => {
    const computedFlex = flex;

    const cssVariables: CSSPropertiesWithVars = {
        '--flex': computedFlex,
        '--justify-content': justify,
        '--align-items': align,
    };

    return (
        <div className={styles.Mobile} style={{ ...cssVariables, ...props.style }}>
            {children}
        </div>
    );
};

export default Mobile;
