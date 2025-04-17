import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.scss';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const Flex = ({
    children,
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    gap = 0,
    wrap = 'nowrap',
    style,
    className,
    ...props
}: FlexProps) => {
    const cssVariables: React.CSSProperties = {
        '--flex-direction': direction,
        '--align-items': align,
        '--justify-content': justify,
        '--wrap': wrap,
        '--gap': `var(--space-${gap})`,
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Flex, className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Flex;
