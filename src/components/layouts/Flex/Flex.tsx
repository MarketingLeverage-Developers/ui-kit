import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.scss';
import { BoxSize, PaddingSize, SpaceSize } from '../../../types';
import {
    dimensionToSpace,
    dimensionToString,
    dimensionToVariable,
    spacingToSpace,
    spacingToString,
} from '@/ui-kit/src/utils';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: SpaceSize | number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    width?: BoxSize | string | number;
    height?: BoxSize | string | number;
    padding?: PaddingSize;
    s?: boolean;
};

const Flex = ({
    children,
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    gap = 0,
    wrap = 'nowrap',
    width,
    height,
    style,
    className,
    padding,
    s,
    ...props
}: FlexProps) => {
    const cssVariables: React.CSSProperties = {
        '--flex-direction': direction,
        '--align-items': align,
        '--justify-content': justify,
        '--wrap': wrap,
        '--gap': s ? spacingToString(gap) : spacingToSpace(gap),
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
        '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Flex, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Flex;
