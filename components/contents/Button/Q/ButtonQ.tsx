import React, { HTMLAttributes } from 'react';
import styles from './ButtonQ.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type ButtonQProps = HTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
};

const ButtonQ = ({ color = '#E88731', size = 'md', full, ...props }: ButtonQProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    const combinedStyles = classNames(styles.ButtonQ, props.className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonQ;
