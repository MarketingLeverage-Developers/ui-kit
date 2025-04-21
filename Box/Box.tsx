import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { SpaceSize } from '@/ui-kit/types';
import { dimensionToString } from '@/ui-kit/utils';

type HexColor = `#${string}`;

type BoxAProps = HTMLAttributes<HTMLDivElement> & {
    paddingY?: SpaceSize;
    paddingX?: SpaceSize;
    backgroundColor?: HexColor;
    backgroundImage?: string;
    shadow?: boolean;
    height?: number | string;
    radius?: number | string;
    absolute?: React.ReactNode;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Box = ({
    paddingY = 0,
    paddingX = 0,
    backgroundColor = '#fff',
    backgroundImage = '',
    shadow,
    height,
    radius = 20,
    absolute,
    ...props
}: BoxAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
        '--background-image': `url(${backgroundImage})`,
        '--height': dimensionToString(height),
        '--border-radius': dimensionToString(radius),
    };

    const className = classNames(styles.Box, props.className, {
        [styles.Shadow]: shadow,
    });

    return (
        <div {...props} className={className} style={{ ...cssVariables, ...props.style }}>
            {props.children}
            {absolute}
        </div>
    );
};

export default Box;
