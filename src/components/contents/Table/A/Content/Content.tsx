import React from 'react';
import styles from './Content.module.scss';
import { dimensionToString } from '@/ui-kit/src/utils';
import classNames from 'classnames';

type ContentProps = {
    children?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
    bottomDivider?: boolean;
    rightDivider?: boolean;
};

const Content = ({ width, children, align = 'left', bottomDivider, rightDivider }: ContentProps) => {
    const cssVariables: React.CSSProperties = {
        '--width': dimensionToString(width),
        '--align': align,
    } as React.CSSProperties;

    const contentClassName = classNames(styles.Content, {
        [styles.BottomDivider]: bottomDivider,
        [styles.RightDivider]: rightDivider,
    });

    return (
        <div className={contentClassName} style={{ ...cssVariables }}>
            {children}
        </div>
    );
};

export default Content;
