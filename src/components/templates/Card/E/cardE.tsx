import styles from './cardE.module.scss';
import React, { ReactNode } from 'react';

type cardEProps = {
    title?: ReactNode | string;
    content?: ReactNode | string;
};

const CardE = ({ title, content }: cardEProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    );
};

export default CardE;
