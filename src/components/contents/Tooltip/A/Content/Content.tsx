import Tooltip from '@/headless/Tooltip/Tooltip';
import React from 'react';
import styles from './Content.module.scss';
import { BoxSize, CSSPropertiesWithVars, FontSize, HexColor, PaddingSize } from '@/ui-kit/src/types';
import { dimensionToString, spacingToString } from '@/ui-kit/src/utils';
import classNames from 'classnames';

type TooltipContentProps = React.ComponentProps<typeof Tooltip.Content> & {
    width?: BoxSize | string | number;
    height?: BoxSize | string | number;
    padding?: PaddingSize;
    fontSize?: FontSize | number;
    bgColor?: HexColor;
    borderColor?: HexColor;
    color?: HexColor;
};

const Content = ({ width, height, padding, fontSize, bgColor, borderColor, color, ...props }: TooltipContentProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
        '--padding': spacingToString(padding),
        '--font-size': dimensionToString(fontSize),
        '--background-color': bgColor,
        '--border-color': borderColor,
        '--color': color,
    };

    const className = classNames(styles.Content, {
        [styles.Left]: props.placement === 'left',
        [styles.Right]: props.placement === 'right',
        [styles.Top]: props.placement === 'top',
        [styles.Bottom]: props.placement === 'bottom',
    });

    return <Tooltip.Content {...props} className={className} style={{ ...cssVariables }} />;
};

export default Content;
