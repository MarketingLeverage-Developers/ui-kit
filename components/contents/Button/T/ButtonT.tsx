import React, { HTMLAttributes } from 'react';
import styles from './ButtonT.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type ButtonTProps = HTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
};

const ButtonT = ({ color = '#E88731', size = 'md', full, ...props }: ButtonTProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    const combinedStyles = classNames(styles.ButtonT, props.className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonT;
