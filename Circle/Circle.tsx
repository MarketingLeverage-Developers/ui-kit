import { BoxSize, CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './Circle.module.scss';

type CircleProps = HTMLAttributes<HTMLButtonElement> & {
    backgroundColor?: HexColor;
    size: BoxSize;
};

const Circle = forwardRef<HTMLButtonElement, CircleProps>(({ backgroundColor = '#FFF', size, ...props }, ref) => {
    const computedSize = `var(--box-${size})`;

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--size': computedSize,
    };

    return <button ref={ref} {...props} className={styles.Circle} style={{ ...cssVariables, ...props.style }} />;
});

export default Circle;
