import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import styles from './gradientButton.module.scss';

type ButtonAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    bgcolor?: HexColor;
    full?: boolean;
    gradient?: string;
    hoverBgColor?: string;
    hoverFontColor?: HexColor;
    borderWeight?: number;
};

const GradientButtonB = ({
    bgcolor = '#ffffff',
    hoverFontColor,
    size = 'md',
    full = false,
    gradient,
    style,
    className,
    hoverBgColor,
    borderWeight,
    ...props
}: ButtonAProps) => {
    const wrapperVars: CSSPropertiesWithVars = {
        ...(gradient && { '--gradient': gradient }),
        ...(hoverBgColor && { '--hoverBgColor': hoverBgColor }),
        ...(hoverFontColor && { '--hoverFontColor': hoverFontColor }),
        ...(borderWeight && { '--borderWeight': `${borderWeight}px` }),
    };

    const combinedButtonClass = classNames(styles.ButtonA, className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return (
        <div className={styles.border} style={wrapperVars as React.CSSProperties}>
            <button {...props} className={combinedButtonClass} style={{ '--color': bgcolor } as React.CSSProperties} />
        </div>
    );
};

export default GradientButtonB;
