import React from 'react';
import styles from './Bottom.module.scss';

type BottomProps = {
    children?: React.ReactNode;
};

const Bottom = ({ children }: BottomProps) => {
    return <div className={styles.Bottom}>{children}</div>;
};

export default Bottom;
