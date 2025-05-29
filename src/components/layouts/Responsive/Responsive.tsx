import React from 'react';
import cn from 'classnames';
import styles from './Responsive.module.scss';
import { dimensionToString } from '../../../utils';
import { SpaceSize } from '../../../types';

type ResponsiveProps = {
    children: React.ReactNode;
    responsive?: boolean;
    direction?: 'column' | 'row';
    gap?: SpaceSize;
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    width?: number | string;
    height?: number | string;
    wrap?: 'wrap' | 'nowrap';
    /** tablet 모드 활성화 여부 */
    tablet?: boolean;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Responsive = ({
    children,
    responsive,
    direction = 'row',
    gap = 0,
    align = 'start',
    justify = 'start',
    width,
    height,
    wrap = 'nowrap',
    tablet = false,
}: ResponsiveProps) => {
    const computedGap = `var(--space-${gap})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--gap': computedGap,
        '--align-items': align,
        '--flex-direction': direction,
        '--responsive': direction === 'column' ? (responsive ? 'row' : 'column') : responsive ? 'column' : 'row',
        '--wrap': wrap,
        '--justify-content': justify,
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
    };

    // tablet=true 일 때만 data-tablet 어트리뷰트가 달리도록
    const dataAttrs = tablet ? { 'data-tablet': '' } : {};

    return (
        <div className={cn(styles.Responsive)} style={cssVariables} {...dataAttrs}>
            {children}
        </div>
    );
};

export default Responsive;
