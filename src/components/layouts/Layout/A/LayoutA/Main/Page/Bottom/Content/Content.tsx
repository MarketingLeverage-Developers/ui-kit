import React from 'react';
import styles from './Content.module.scss';

type ContentProps = {
    children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
    return <div className={styles.Content}>{children}</div>;
};

export default Content;
