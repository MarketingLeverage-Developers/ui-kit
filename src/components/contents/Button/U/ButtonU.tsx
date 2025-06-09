import React, { HTMLAttributes } from 'react';
import styles from './ButtonU.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';

type ButtonUProps = HTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
    radius?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
};

const ButtonU = ({
    color,
    size = 'md',
    full,
    radius = 0,
    borderColor = '#d5d5d5',
    backgroundColor = '#fff',
    ...props
}: ButtonUProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--radius': `${radius}px`,
        '--borderColor': borderColor,
        '--background-color': backgroundColor,
    };

    const combinedStyles = classNames(styles.ButtonV, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonU;
