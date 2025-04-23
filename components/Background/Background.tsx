import React from 'react';
import styles from './Background.module.scss';

type HexColor = `#${string}`;

type BackgroundProps = {
    children: React.ReactNode;
    color?: HexColor;
    image?: string;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Background = ({ color = '#fff', image = '', children }: BackgroundProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': color,
        '--background-image': `url(${image})`,
    };

    return (
        <div className={styles.Background} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Background;
