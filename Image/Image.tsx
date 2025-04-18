import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/types';
import { dimensionToString } from '@/ui-kit/utils';
import React from 'react';
import styles from './Image.module.scss';

type ImageProps = {
    image: string;
    width: BoxSize;
    height: BoxSize;
    alt?: string;
    radius: string | number;
};

const Image = ({ image, width, height, alt, radius }: ImageProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': `var(--box-${width})`,
        '--height': `var(--box-${height})`,
        '--border-radius': dimensionToString(radius),
    };
    return <img loading="lazy" src={image} alt={alt} className={styles.Image} style={{ ...cssVariables }} />;
};

export default Image;
