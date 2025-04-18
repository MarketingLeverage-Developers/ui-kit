import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { SpaceSize } from '@/ui-kit/types';
import { dimensionToString } from '@/ui-kit/utils';

type HexColor = `#${string}`;

type BoxProps = HTMLAttributes<HTMLDivElement> & {
    paddingY?: SpaceSize;
    paddingX?: SpaceSize;
    backgroundColor?: HexColor;
    backgroundImage?: string;
    shadow?: boolean;
    height?: number | number;
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
    ...props
}: BoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
        '--background-image': `url(${backgroundImage})`,
        '--height': dimensionToString(height),
    };

    const className = classNames(styles.Box, props.className, {
        [styles.Shadow]: shadow,
    });

    return <div {...props} className={className} style={{ ...cssVariables, ...props.style }} />;
};

export default Box;
