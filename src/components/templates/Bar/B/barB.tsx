import Image from '@/ui-kit/src/components/contents/Image/Image';
import styles from './barB.module.scss';
import React from 'react';

type BarBProps = {
    disableContent?: React.ReactNode;
    icon?: string;
    activeContent?: React.ReactNode;
};

const BarB = ({ icon, disableContent, activeContent }: BarBProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.disable}>{disableContent}</div>
            <div className={styles.ActiveWrap}>
                {icon && <Image image={icon} alt="icon-img" />}
                <div className={styles.ActiveContent}>{activeContent}</div>
            </div>
        </div>
    );
};
export default BarB;
