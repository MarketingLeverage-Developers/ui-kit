import React from 'react';
import styles from './cardI.module.scss';
import Image from '@/ui-kit/src/components/contents/Image/Image';

type CardIProps = {
    num?: number;
    title?: React.ReactNode;
    content?: React.ReactNode;
};

const CardI = ({ num = 0, title, content }: CardIProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.num}>{`STEP ${num}`}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    );
};

export default CardI;
