import React, { ButtonHTMLAttributes } from 'react';
import styles from './ButtonE.module.scss';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, FontSize, HexColor, PaddingSize } from '../../../../types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type ButtonEProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ContentSize;
    color?: HexColor;
    textColor?: HexColor;
    full?: boolean;
    height?: BoxSize | number;
    radius?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    fontSize?: FontSize | string;
    fontWeight?: number;
    padding?: PaddingSize;
    s?: boolean;
};

const ButtonE = ({
    color,
    textColor,
    padding,
    size,
    radius = 0,
    borderColor,
    full,
    fontSize,
    fontWeight,
    height,
    s,
    backgroundColor = 'inherit',
    ...props
}: ButtonEProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--radius': `${radius}px`,
        '--border-color': borderColor,
        '--background-color': backgroundColor,
        '--text-color': textColor,
        '--font-weight': fontWeight,
        '--font-size': s ? dimensionToString(fontSize) : toFont(fontSize),
        '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
    };

    const combinedStyles = classNames(styles.ButtonE, props.className, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    return <button {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default ButtonE;
