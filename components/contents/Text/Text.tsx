import React from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';
import { FontSize, FontWeight } from '@/ui-kit/types/types';
import { config } from '@/ui-kit/configs/config';

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
    size?: FontSize;
    weight?: FontWeight;
    color?: string;
    align?: 'left' | 'center' | 'right';
    decoration?: 'none' | 'underline' | 'overline' | 'line-through';
    height?: FontSize;
    children: React.ReactNode;
    line?: number;
    p?: boolean;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Text = ({
    size = 14,
    weight = 400,
    color = config.theme.textColor ?? '#000',
    align = 'left',
    decoration = 'none',
    height = size,
    line = 0,
    children,
    style,
    className,
    p,
    ...props
}: TextProps) => {
    // size가 number면 'px' 단위를 붙이고, 문자열이면 그대로 사용
    const computedsize = `var(--font-size-${size})`;
    const computedweight = weight;
    const computedColor = color;
    const computedTextAlign = align;
    const computedLieHeight = `var(--font-size-${height})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--font-size': computedsize,
        '--font-weight': computedweight,
        '--color': computedColor,
        '--text-align': computedTextAlign,
        '--text-decoration': decoration,
        '--line-height': computedLieHeight,
        '--line': line,
    };

    const combinedStyles = classNames(styles.Text, {
        [styles.Line]: line > 0,
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

export default Text;
