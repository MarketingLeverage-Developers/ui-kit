import React from 'react';
import styles from './Top.module.scss';

type TopProps = {
    children?: React.ReactNode;
};

const Top = ({ children }: TopProps) => {
    return (
        <div id="page-top" className={styles.Top}>
            {children}
        </div>
    );
};

export default Top;
