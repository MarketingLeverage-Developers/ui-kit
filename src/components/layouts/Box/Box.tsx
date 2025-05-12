import React, { HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import classNames from 'classnames';
import { BoxSize, SpaceSize } from '../../../types';
import { dimensionToSpace, dimensionToString, dimensionToVariable } from '../../../utils';

type HexColor = `#${string}`;

type RadiusValue = number | string;

type BorderRadius =
    | RadiusValue
    | {
          topLeft?: RadiusValue;
          topRight?: RadiusValue;
          bottomLeft?: RadiusValue;
          bottomRight?: RadiusValue;
      };

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

type BoxAProps = HTMLAttributes<HTMLDivElement> & {
    padding?: PaddingSize;
    backgroundColor?: HexColor | 'inherit' | 'transparent';
    backgroundImage?: string;
    shadow?: boolean;
    width?: BoxSize | string;
    height?: BoxSize | string;
    radius?: BorderRadius;
    absolute?: React.ReactNode;
    borderWeight?: number;
    borderColor?: HexColor;
    boxSizing?: 'border-box' | 'content-box';
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Box = ({
    padding,
    backgroundColor = 'inherit',
    backgroundImage = '',
    shadow,
    width,
    height,
    radius = 0,
    borderWeight = 0,
    borderColor = '#E2E2E2',
    absolute,
    boxSizing = 'border-box',
    ...props
}: BoxAProps) => {
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

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': backgroundColor,

        '--background-image': `url(${backgroundImage})`,
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
        '--border-weight': `${borderWeight}px`,
        '--border-color': borderColor,
        ...(typeof radius === 'object'
            ? {
                  '--border-top-left-radius': dimensionToString(radius.topLeft ?? 0),
                  '--border-top-right-radius': dimensionToString(radius.topRight ?? 0),
                  '--border-bottom-left-radius': dimensionToString(radius.bottomLeft ?? 0),
                  '--border-bottom-right-radius': dimensionToString(radius.bottomRight ?? 0),
              }
            : {
                  '--border-top-left-radius': dimensionToString(radius ?? 0),
                  '--border-top-right-radius': dimensionToString(radius ?? 0),
                  '--border-bottom-left-radius': dimensionToString(radius ?? 0),
                  '--border-bottom-right-radius': dimensionToString(radius ?? 0),
              }),
        '--padding': spacingToString(padding),
        '--box-sizing': boxSizing,
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
