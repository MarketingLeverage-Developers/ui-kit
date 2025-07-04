import { BoxSize, CSSPropertiesWithVars } from '../../../types';
import { dimensionToString, dimensionToVariable } from '../../../utils';
import React, { HTMLAttributes } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

type RadiusValue = number | string;

type BorderRadius =
    | RadiusValue
    | {
          topLeft?: RadiusValue;
          topRight?: RadiusValue;
          bottomLeft?: RadiusValue;
          bottomRight?: RadiusValue;
      };

type ImageProps = HTMLAttributes<HTMLImageElement> & {
    image: string;
    width?: BoxSize | string;
    height?: BoxSize | string;
    alt?: string;
    radius?: BorderRadius;
    fit?: 'cover' | 'contain';
};

const Image = ({ image, width, height, alt, radius = 0, fit = 'contain', ...props }: ImageProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
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
        '--object-fit': fit,
    };

    const className = classNames(styles.Image, props.className);

    return (
        <img
            {...props}
            loading="lazy"
            src={image}
            alt={alt}
            className={className}
            style={{ ...cssVariables, ...props.style }}
        />
    );
};

export default Image;
