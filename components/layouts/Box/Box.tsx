import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { BoxSize, SpaceSize } from '@/ui-kit/types';
import { dimensionToString, dimensionToVariable } from '@/ui-kit/utils';

type HexColor = `#${string}`;

type BoxAProps = HTMLAttributes<HTMLDivElement> & {
    paddingY?: SpaceSize;
    paddingX?: SpaceSize;
    backgroundColor?: HexColor;
    backgroundImage?: string;
    shadow?: boolean;
    width?: BoxSize | string;
    height?: BoxSize | string;
    radius?: number | string;
    absolute?: React.ReactNode;
    borderWeight?: number;
    borderColor?: HexColor;
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
    width,
    height,
    radius = 20,
    borderWeight = 0,
    borderColor = '#E2E2E2',
    absolute,
    ...props
}: BoxAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
        '--background-image': `url(${backgroundImage})`,
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--border-radius': dimensionToString(radius),
        '--border-weight': `${borderWeight}px`,
        '--border-color': borderColor,
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
