import React from 'react';
import styles from './cardG.module.scss';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import { FaArrowRight } from 'react-icons/fa';

type CardGProps = {
    img?: string;
    buttonText?: React.ReactNode;
    content?: React.ReactNode;
};

const CardG = ({ img, buttonText, content }: CardGProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrap}>
                <div className={styles.content}>{content}</div>
                <div className={styles.buttonWrap}>
                    <div className={styles.button}>
                        {buttonText}
                        <div className={styles.arrowWrap}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imgWrap}>{img && <Image image={img} />}</div>
        </div>
    );
};

export default CardG;
