import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.scss';
import { BoxSize, SpaceSize } from '../../../types';
import { dimensionToSpace, dimensionToVariable } from '@/ui-kit/src/utils';

type PaddingSize =
    | SpaceSize
    | {
          x?: SpaceSize;
          y?: SpaceSize;
          l?: SpaceSize;
          r?: SpaceSize;
          t?: SpaceSize;
          b?: SpaceSize;
      };

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: SpaceSize;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    width?: BoxSize | string;
    height?: BoxSize | string;
    padding?: PaddingSize;
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
    ...props
}: FlexProps) => {
    const spacingToString = (padding: PaddingSize | number = 0): string => {
        // now padding is always number/string/object

        if (typeof padding === 'number' || typeof padding === 'string') {
            return dimensionToSpace(padding as number | SpaceSize);
        }

        // object: start with x/y defaults
        const px = padding.x != null ? dimensionToSpace(padding.x) : '0px';
        const py = padding.y != null ? dimensionToSpace(padding.y) : '0px';

        let top = py;
        let bottom = py;
        let left = px;
        let right = px;

        if (padding.t != null) top = dimensionToSpace(padding.t);
        if (padding.b != null) bottom = dimensionToSpace(padding.b);
        if (padding.l != null) left = dimensionToSpace(padding.l);
        if (padding.r != null) right = dimensionToSpace(padding.r);

        return `${top} ${right} ${bottom} ${left}`;
    };

    const cssVariables: React.CSSProperties = {
        '--flex-direction': direction,
        '--align-items': align,
        '--justify-content': justify,
        '--wrap': wrap,
        '--gap': `var(--space-${gap})`,
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--padding': spacingToString(padding),
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Flex, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Flex;
