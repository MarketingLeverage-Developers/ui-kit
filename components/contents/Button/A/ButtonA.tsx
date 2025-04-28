import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonA.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type ButtonAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
};

const ButtonA = ({ color = '#E88731', size = 'md', full, ...props }: ButtonAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    const combinedStyles = classNames(styles.ButtonA, props.className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonA;
