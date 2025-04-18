import React, { HTMLAttributes } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import { SpaceSize } from '@/ui-kit/types';

type HexColor = `#${string}`;

type BaiscInputProps = HTMLAttributes<HTMLInputElement> & {
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

const Input = ({
    paddingY = 0,
    paddingX = 0,
    backgroundColor = '#fff',
    color = '#000',
    variant = 'contained',
    full,
    ...props
}: BaiscInputProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--color': color,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
    };

    const combinedStyles = classNames(styles.Input, {
        // [styles.Basic]: variant === 'contained',
        // [styles.Outlined]: variant === 'outlined',
        [styles.Full]: full,
    });

    return <input {...props} className={combinedStyles} style={{ ...cssVariables }} />;
};

export default Input;
