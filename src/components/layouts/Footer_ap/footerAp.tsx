import React from 'react';
import styles from './footerAp.module.scss';
import Image from '../../contents/Image/Image';
import pc from '@/ui-kit/src/assets/images/footer_pc.png';
import mo from '@/ui-kit/src/assets/images/footer_mo.png';

type FooterProps = {
    children: React.ReactNode;
};

const FooterAp = ({ children }: FooterProps) => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footerContent}>{children}</div>
            <Image image={pc.src} width="100%" className={styles.pc} />
            <Image image={mo.src} width="100%" className={styles.mo} />
        </div>
    );
};

export default FooterAp;
