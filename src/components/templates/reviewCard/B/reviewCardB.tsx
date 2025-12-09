import React from 'react';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './reviewCardB.module.scss';
type ReviewCardBProps = {
    thumb: string;
    title?: string;
    content?: React.ReactNode; // 기존 타입 유지 (문자열/JSX 모두 허용)
};
const ReviewCardB: React.FC<ReviewCardBProps> = ({ thumb, content, title }) => {
    const isString = (v: unknown): v is string => typeof v === 'string';
    return (
        <div className={styles.Container}>
            <Image image={thumb} width="100%" alt="card-img" />
            <div className={styles.content}>
                {title ? <div className={styles.title}>{title}</div> : null}
                <div className={styles.textWrap}>
                    {isString(content) ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <>{content}</>}
                </div>
            </div>
        </div>
    );
};
export default ReviewCardB;
