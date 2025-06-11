import React from 'react';
import styles from './Content.module.scss';
import classNames from 'classnames';

type ContentProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

const Content = ({ children, align = 'center' }: ContentProps) => {
    const alignMap = {
        left: styles.Left,
        right: styles.Right,
        center: styles.Center,
    };

    const className = classNames(styles.Content, alignMap[align]);

    return <div className={className}>{children}</div>;
};

export default Content;
