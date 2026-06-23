import React from 'react';
import styles from './cardJ.module.scss';
import Image from '@/ui-kit/src/components/contents/Image/Image';

type CardJProps = {
    img: string;
    label?: React.ReactNode;
    value?: React.ReactNode;
    subLabel?: React.ReactNode;
    subValue?: React.ReactNode;
};

const CardJ = ({ img, label, value, subLabel, subValue }: CardJProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrap}>
                <Image image={img} alt="card-img" />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.contentRow}>
                    {label}
                    {value}
                </div>
                <div className={styles.contentRow}>
                    {subLabel}
                    {subValue}
                </div>
            </div>
        </div>
    );
};

export default CardJ;
