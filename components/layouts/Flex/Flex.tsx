import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.scss';
import { SpaceSize } from '@/ui-kit/types';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: SpaceSize;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    width?: SpaceSize | string;
    height?: SpaceSize | string;
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
    ...props
}: FlexProps) => {
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };

    const cssVariables: React.CSSProperties = {
        '--flex-direction': direction,
        '--align-items': align,
        '--justify-content': justify,
        '--wrap': wrap,
        '--gap': `var(--space-${gap})`,
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Flex, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Flex;
