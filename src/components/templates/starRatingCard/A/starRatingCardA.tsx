import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './starRatingCardA.module.scss';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type StarRatingCardAProps = {
    title?: React.ReactNode;
    titleMo?: React.ReactNode;
    content?: React.ReactNode;
    img?: string;
    media?: React.ReactNode;
};

const StarRatingCardA = ({ title, content, img, media, titleMo }: StarRatingCardAProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrap}>{img && <Image image={img} alt="img" />}</div>{' '}
            <div className={styles.contentWrap}>
                <div className={styles.starWrap}>
                    {Array(5)
                        .fill(null)
                        .map((_, idx) => (
                            <div key={idx} className={styles.star}>
                                <FaStar />
                            </div>
                        ))}
                </div>
                <div className={styles.content}>{content}</div>{' '}
                <div className={styles.titleWrap}>
                    <div className={styles.title}>{titleMo ? titleMo : title}</div>
                    {media}
                </div>
            </div>
        </div>
    );
};
export default StarRatingCardA;
