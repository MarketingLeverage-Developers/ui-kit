import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonB.module.scss';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, FontSize, HexColor, PaddingSize } from '../../../../types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type ButtonBProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    bgColor?: HexColor;
    textColor?: HexColor;
    full?: boolean;
    fontSize?: FontSize | string;
    padding?: PaddingSize;
    height?: BoxSize | number;
    s?: boolean;
};

const ButtonB = ({ color, textColor, size, full, fontSize, height, bgColor, padding, s, ...props }: ButtonBProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--text-color': textColor,
        '--background-color': bgColor,
        '--font-size': s ? dimensionToString(fontSize) : toFont(fontSize),
        '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
    };

    const combinedStyles = classNames(styles.ButtonB, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...props.style, ...cssVariables }} />;
};

export default ButtonB;
