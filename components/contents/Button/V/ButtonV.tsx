import React, { HTMLAttributes } from 'react';
import styles from './ButtonV.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type ButtonVProps = HTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    full?: boolean;
};

const ButtonV = ({ color = '#E88731', size = 'md', full, ...props }: ButtonVProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    const combinedStyles = classNames(styles.ButtonV, props.className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonV;
