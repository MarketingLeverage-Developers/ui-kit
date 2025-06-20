import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonB.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';

type ButtonBProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    textColor?: HexColor;
    full?: boolean;
};

const ButtonB = ({ color, textColor, size = 'md', full, ...props }: ButtonBProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--text-color': textColor,
    };

    const combinedStyles = classNames(styles.ButtonB, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonB;
