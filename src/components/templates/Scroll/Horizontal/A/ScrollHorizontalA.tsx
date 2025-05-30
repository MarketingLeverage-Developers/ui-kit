import React from 'react';
import styles from './ScrollHorizontalA.module.scss';
import { BoxSize, CSSPropertiesWithVars, SpaceSize } from '@/ui-kit/src/types';
import { dimensionToString } from '@/ui-kit/src/utils';

export interface ScrollHorizontalAProps {
    imgs: string[];
    width?: BoxSize;
    height?: BoxSize;
    imageWidth?: BoxSize;
    imageHeight?: BoxSize;
    gap?: SpaceSize;
}

const ScrollHorizontalA: React.FC<ScrollHorizontalAProps> = ({
    gap,
    imgs,
    width = '100%',
    height = 'auto',
    imageWidth = 150,
    imageHeight = 50,
}) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToString(width),
        '--height': dimensionToString(height),
        '--image-width': dimensionToString(imageWidth),
        '--image-height': dimensionToString(imageHeight),
        '--gap': dimensionToString(gap),
    };
    return (
        <div className={styles.Container} style={{ ...cssVariables }}>
            <div className={styles.ScrollContent}>
                <ul className={styles.ListWrapper}>
                    {[...imgs, ...imgs].map((img, index) => (
                        <li key={index}>
                            <img src={img} alt="partner" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ScrollHorizontalA;
