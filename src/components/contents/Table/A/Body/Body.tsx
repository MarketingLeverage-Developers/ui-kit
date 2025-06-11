import React from 'react';
import styles from './Body.module.scss';

type BodyProps = {
    children: React.ReactNode;
};

const Body = ({ children }: BodyProps) => {
    return <tbody className={styles.Body}>{children}</tbody>;
};

export default Body;
