import React from 'react';
import styles from './Aside.module.scss';

type AsideProps = {
    children: React.ReactNode;
};

const Aside = ({ children }: AsideProps) => {
    return <div className={styles.Aside}>{children}</div>;
};

export default Aside;
