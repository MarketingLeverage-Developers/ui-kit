import React, { InputHTMLAttributes } from 'react';
import styles from './InputA.module.scss';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars } from '@/ui-kit/types';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputAProps = BaseInputProps & {
    size?: ContentSize;
    full?: boolean;
};

const InputA = ({ size = 'md', full, ...props }: InputAProps) => {
    const cssVariables: CSSPropertiesWithVars = {};

    const combinedStyles = classNames(styles.InputA, props.className, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <input {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default InputA;
