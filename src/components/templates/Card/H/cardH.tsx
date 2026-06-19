import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './cardH.module.scss';
import React from 'react';
import { HexColor } from '@/ui-kit/src/types';

type CardH = {
    title?: React.ReactNode;
    content?: React.ReactNode;
    icon?: string;
    bgColor?: HexColor;
};

const CardH = ({ title, content, icon, bgColor = '#ffffff' }: CardH) => {
    return (
        <div className={styles.container} style={{ backgroundColor: bgColor }}>
            <div className={styles.contentWrap}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
            </div>
            <div className={styles.imgWrap}>{icon && <Image image={icon} alt="icon-img" />}</div>
        </div>
    );
};
export default CardH;
