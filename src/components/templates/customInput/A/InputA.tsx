import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './InputA.module.scss';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, FontSize, PaddingSize } from '../../../../types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputAProps = BaseInputProps & {
    size?: ContentSize;
    full?: boolean;
    width?: BoxSize | number | string;
    height?: BoxSize | number | string;
    padding?: PaddingSize | number;
    fontSize?: FontSize | number;
    s?: boolean;
};

const CustomInputA = forwardRef<HTMLInputElement, InputAProps>(
    ({ size, full, className, style, s, fontSize, padding, width, height, ...props }, ref) => {
        console.log(width, '윗쓰');

        const cssVariables: CSSPropertiesWithVars = {
            '--font-size': s ? dimensionToString(fontSize) : toFont(fontSize),
            '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
            '--width': s ? dimensionToString(width) : dimensionToVariable(width),
            '--height': s ? dimensionToString(height) : dimensionToVariable(height),
        };
        const combinedStyles = classNames(styles.InputA, className, {
            [styles.Xxs]: size === '2xs',
            [styles.Xs]: size === 'xs',
            [styles.Sm]: size === 'sm',
            [styles.Md]: size === 'md',
            [styles.Lg]: size === 'lg',
            [styles.Full]: full,
            [styles.Disabled]: props.disabled,
        });

        return <input ref={ref} {...props} className={combinedStyles} style={{ ...style, ...cssVariables }} />;
    }
);

export default CustomInputA;
