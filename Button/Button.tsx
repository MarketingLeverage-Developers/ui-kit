import React, { HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { SpaceSize } from '@/ui-kit/types';

type HexColor = `#${string}`;

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    paddingY?: SpaceSize;
    paddingX?: SpaceSize;
    backgroundColor?: HexColor;
    color?: HexColor;
    variant?: 'contained' | 'outlined';
    full?: boolean;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Button = ({
    paddingY = 0,
    paddingX = 0,
    backgroundColor = '#fff',
    color = '#000',
    variant = 'contained',
    full,
    ...props
}: ButtonProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--color': color,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
    };

    const combinedStyles = classNames(styles.Button, props.className, {
        [styles.Basic]: variant === 'contained',
        [styles.Outlined]: variant === 'outlined',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables }} />;
};

export default Button;
