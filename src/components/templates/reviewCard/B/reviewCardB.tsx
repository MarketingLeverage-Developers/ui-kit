import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './reviewCardB.module.scss';
import React from 'react';

type ReviewCardBProps = {
    thumb: string;
    title?: string;
    content?: React.ReactNode;
};

const ReviewCardB = ({ thumb, content, title }: ReviewCardBProps) => {
    return (
        <div className={styles.Container}>
            <Image image={thumb} width="100%" />
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.textWrap}>
                    <div dangerouslySetInnerHTML={{ __html: content! }} />
                </div>
            </div>
        </div>
    );
};
export default ReviewCardB;
