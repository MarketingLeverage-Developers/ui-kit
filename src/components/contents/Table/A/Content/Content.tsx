import React from 'react';
import styles from './Content.module.scss';
import classNames from 'classnames';
import { BoxSize } from '@/ui-kit/src/types';
import { dimensionToString, dimensionToVariable } from '@/ui-kit/src/utils';

type ContentProps = {
    children?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
};

const Content = ({ width, children, align = 'left' }: ContentProps) => {
    const alignMap = {
        left: styles.Left,
        right: styles.Right,
        center: styles.Center,
    };

    const className = classNames(styles.Content, alignMap[align]);

    const cssVariables: React.CSSProperties = {
        '--width': dimensionToString(width),
        '--align': align,
    } as React.CSSProperties;

    return (
        <div className={className} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Content;
