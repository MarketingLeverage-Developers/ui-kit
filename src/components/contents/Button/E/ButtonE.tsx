import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonE.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';

type ButtonEProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
    radius?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
};

const ButtonE = ({
    color,
    size = 'md',
    radius = 0,
    borderColor,
    full,
    backgroundColor = 'inherit',
    ...props
}: ButtonEProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--radius': `${radius}px`,
        '--border-color': borderColor,
        '--background-color': backgroundColor,
    };

    const combinedStyles = classNames(styles.ButtonE, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonE;
