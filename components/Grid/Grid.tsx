import React from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';
import { BoxSize, SpaceSize } from '../../types';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    gridTemplateColumns?: string;
    mobileTeplateColumns?: string;
    gridTemplateRows?: string;
    gap?: SpaceSize;
    columnGap?: SpaceSize;
    rowGap?: SpaceSize;
    width?: BoxSize | string;
    height?: BoxSize | string;
};

const Grid = ({
    children,
    gridTemplateColumns,
    mobileTeplateColumns,
    gridTemplateRows,
    gap = 0,
    columnGap,
    rowGap,
    width,
    height,
    style,
    ...props
}: GridProps) => {
    // width와 height가 숫자면 px 단위를 붙이고, 문자열이면 그대로 사용
    const dimensionToString = (dim?: number | string): string => {
        if (typeof dim === 'number') {
            return `${dim}px`;
        }
        return dim || 'auto';
    };

    // CSS 변수로 동적 값 전달
    const cssVariables: React.CSSProperties = {
        '--grid-template-columns': gridTemplateColumns || 'none',
        '--mobile-teplate-columns': mobileTeplateColumns || 'repeat(1, 1fr)',
        '--grid-template-rows': gridTemplateRows || 'none',
        '--gap': `var(--space-${gap})`,
        '--column-gap': columnGap !== undefined ? `var(--space-${columnGap})` : undefined,
        '--row-gap': rowGap !== undefined ? `var(--space-${rowGap})` : undefined,
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
    } as React.CSSProperties;

    return (
        <div {...props} className={classNames(styles.Grid, props.className)} style={{ ...cssVariables, ...style }}>
            {children}
        </div>
    );
};

export default Grid;
