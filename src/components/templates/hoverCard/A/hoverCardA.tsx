'use client';

import React from 'react';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './hoverCardA.module.scss';

interface CardData {
    title?: string;
    content?: React.ReactNode;
    buttonContent?: React.ReactNode;
}

interface HoverCardAProps extends CardData {
    plusIconSrc: string;
    arrowIconSrc: string;
}

const HoverCardA: React.FC<HoverCardAProps> = ({ title, content, buttonContent, plusIconSrc, arrowIconSrc }) => {
    const handleContactClick = () => {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={styles.container} onClick={handleContactClick}>
            <div className={styles.titleLine}>{title}</div>
            <div className={styles.buttonLine}>
                <div className={styles.buttonWrap}>
                    <Image image={plusIconSrc} width={25} alt="plus icon" />
                </div>
            </div>
            {/* hover 시 활성화 */}
            <div className={styles.absoluteWrap}>
                <div className={styles.content}>
                    <div className={styles.itemContent}>{content}</div>
                    <div className={styles.contactButton}>
                        {buttonContent}
                        <Image image={arrowIconSrc} width={10} alt="arrow icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverCardA;
