import React from 'react';
import styles from './ButtonD.module.scss';
import classNames from 'classnames';
import { ButtonProps, CSSPropertiesWithVars, SpaceSize } from '@/ui-kit/types';

const ButtonD = ({
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

    const combinedStyles = classNames(styles.ButtonD, props.className, {
        [styles.Basic]: variant === 'contained',
        [styles.Outlined]: variant === 'outlined',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables }} />;
};

export default ButtonD;
