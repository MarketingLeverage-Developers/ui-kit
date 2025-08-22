import React from 'react';
import classNames from 'classnames';
import styles from './gradientText.module.scss';
import { FontSize, FontWeight } from '@/ui-kit/src/types';
import { dimensionToString, toFont } from '@/ui-kit/src/utils';

export type gradientTextAProps = React.HTMLAttributes<HTMLSpanElement> & {
    size?: FontSize | number;
    weight?: FontWeight;
    color?: string;
    align?: 'left' | 'center' | 'right';
    decoration?: 'none' | 'underline' | 'overline' | 'line-through';
    height?: FontSize | number;
    children: React.ReactNode;
    line?: number;
    p?: boolean;
    wbreak?: 'break-all' | 'keep-all' | 'break-word';
    whiteSpace?: 'wrap' | 'nowrap';
    gradient?: string;
    family?: string;
    s?: boolean;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number | undefined;
}

const GradientTextA = ({
    family,
    gradient,
    size = 14,
    weight = 400,
    color,
    align = 'left',
    decoration = 'none',
    height = size,
    line = 0,
    children,
    style,
    className,
    p,
    wbreak = 'break-word',
    whiteSpace = 'wrap',
    s,
    ...props
}: gradientTextAProps) => {
    // size가 number면 'px' 단위를 붙이고, 문자열이면 그대로 사용
    const computedweight = weight;
    const computedColor = color;
    const computedTextAlign = align;
    const computedFamily = family ? `var(--font-${family})` : undefined;

    const cssVariables: CSSPropertiesWithVars = {
        '--font-size': s ? dimensionToString(size) : toFont(size),
        '--font-weight': computedweight,
        '--color': computedColor,
        '--text-align': computedTextAlign,
        '--text-decoration': decoration,
        '--line-height': s ? dimensionToString(size) : toFont(size),
        '--line': line,
        '--word-break': wbreak,
        '--white-space': whiteSpace,
        '--font-family': computedFamily,
        ...(gradient ? { '--gradient': gradient } : {}),
    };

    const combinedStyles = classNames(styles.Text, {
        [styles.Line]: line > 0,
        [styles.Gradient]: !!gradient, // 👉 그라디언트 적용 여부
    });

    return (
        <>
            {p ? (
                <p {...props} className={combinedStyles} style={{ ...cssVariables, ...style }}>
                    {children}
                </p>
            ) : (
                <span {...props} className={combinedStyles} style={{ ...cssVariables, ...style }}>
                    {children}
                </span>
            )}
        </>
    );
};

export default GradientTextA;
