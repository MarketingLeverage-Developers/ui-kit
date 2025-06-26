// InputJ.tsx
import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './InputJ.module.scss';
import { ContentSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import classNames from 'classnames';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputJProps = BaseInputProps & {
    size?: ContentSize;
    full?: boolean;
    label: string;
    unit?: string;
    required?: boolean;
};

const InputJ = forwardRef<HTMLInputElement, InputJProps>(
    ({ size = 'md', full, className, style, label, unit, required, ...props }, ref) => {
        const cssVariables: CSSPropertiesWithVars = {};

        const combinedStyles = classNames(styles.InputJ, className, {
            [styles.Xxs]: size === '2xs',
            [styles.Xs]: size === 'xs',
            [styles.Sm]: size === 'sm',
            [styles.Md]: size === 'md',
            [styles.Lg]: size === 'lg',
            [styles.Full]: full,
        });

        return (
            <div className={combinedStyles} style={{ ...style, ...cssVariables }}>
                <div className={styles.InputWrapper}>
                    <span className={styles.Label}>
                        {label}
                        {required && <span className={styles.Required}>*</span>}
                    </span>
                    <input ref={ref} {...props} className={styles.InputElement} />
                    {unit && <span className={styles.Unit}>{unit}</span>}
                </div>
            </div>
        );
    }
);

export default InputJ;
