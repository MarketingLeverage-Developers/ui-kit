import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import styles from './logoBoxA.module.scss';

import React from 'react';

type logoBoxAProps = {
    logo: string;
    bgColor: HexColor;
    style?: React.CSSProperties;
    boxShadow: string;
    children: React.ReactNode;
};

const LogoBoxA = ({ bgColor, logo, children, boxShadow, style }: logoBoxAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--bgColor': bgColor,
        '--boxShadow': boxShadow,
    };
    return (
        <div className={styles.container} style={{ ...cssVariables, ...style }}>
            <div className={styles.logoWrap}>
                <img src={logo} loading="lazy" alt="로고" />
            </div>
            {children}
        </div>
    );
};
export default LogoBoxA;
