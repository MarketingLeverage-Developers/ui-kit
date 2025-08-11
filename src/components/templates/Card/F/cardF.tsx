import React from 'react';
import styles from './cardF.module.scss';
import Image from '@/ui-kit/src/components/contents/Image/Image';

type CardFProps = {
    num?: number;
    img?: string;
    title?: React.ReactNode;
    content?: React.ReactNode;
};

const CardF = ({ num = 0, img, title, content }: CardFProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrap}>
                <div className={styles.num}>{`Point 0${num}`}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
            </div>
            <div className={styles.imgWrap}>{img && <Image image={img} />}</div>
        </div>
    );
};

export default CardF;
