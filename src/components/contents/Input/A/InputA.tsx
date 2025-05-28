import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './InputA.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars } from '../../../../types';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputAProps = BaseInputProps & {
    size?: ContentSize;
    full?: boolean;
};

const InputA = forwardRef<HTMLInputElement, InputAProps>(({ size = 'md', full, className, style, ...props }, ref) => {
    const cssVariables: CSSPropertiesWithVars = {};
    const combinedStyles = classNames(styles.InputA, className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <input ref={ref} {...props} className={combinedStyles} style={{ ...cssVariables, ...style }} />;
});

export default InputA;
