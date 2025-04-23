import React from 'react';
import styles from './InputA.module.scss';
import classNames from 'classnames';
import { CSSPropertiesWithVars, InputProps } from '@/ui-kit/types';

const InputA = ({
    paddingY = 0,
    paddingX = 0,
    backgroundColor = '#fff',
    color = '#000',
    variant = 'contained',
    full,
    ...props
}: InputProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--color': color,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
    };

    const combinedStyles = classNames(styles.InputA, {
        // [styles.Basic]: variant === 'contained',
        // [styles.Outlined]: variant === 'outlined',
        [styles.Full]: full,
    });

    return <input {...props} className={combinedStyles} style={{ ...cssVariables }} />;
};

export default InputA;
