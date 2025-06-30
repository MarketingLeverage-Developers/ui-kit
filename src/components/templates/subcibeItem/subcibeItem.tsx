// SubscribeItem.tsx
import React from 'react';
import styles from './subcibeItem.module.scss';

interface SubscribeItemProps {
    content: {
        rank: string;
        icon: string;
        price: string;
        service: string;
    };
}

const SubscribeItem: React.FC<SubscribeItemProps> = ({ content }) => {
    return (
        <div
            className={`
        ${styles.contentContainer}
      `}
        >
            <div className={styles.firstLine}>
                <div className={styles.label}>마레 솔루션</div>
                {/* {isActive === idx && <div className={styles.active}>이용중</div>} */}
            </div>
            <div
                className={`
          ${styles.secondLine}
        `}
            >
                <div className={styles.rankWrap}>
                    <img src={content.icon} loading="lazy" alt="아이콘" />
                    {content.rank}
                </div>
                <div>{content.price}</div>
            </div>
            <div className={styles.line} />
            <div className={styles.serviceWrap}>{content.service}</div>
        </div>
    );
};

export default SubscribeItem;
