import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { SpaceSize } from '@/ui-kit/types';

type HexColor = `#${string}`;

type BoxProps = HTMLAttributes<HTMLDivElement> & {
    paddingY?: SpaceSize;
    paddingX?: SpaceSize;
    backgroundColor?: HexColor;
    backgroundImage?: string;
    shadow?: boolean;
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
    ...props
}: BoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,
        '--padding-y': `var(--space-${paddingY})`,
        '--padding-x': `var(--space-${paddingX})`,
        '--background-image': `url(${backgroundImage})`,
    };

    const className = classNames(styles.Box, props.className, {
        [styles.Shadow]: shadow,
    });

    return <div {...props} className={className} style={{ ...cssVariables, ...props.style }} />;
};

export default Box;
