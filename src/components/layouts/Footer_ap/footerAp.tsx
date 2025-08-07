import React from 'react';
import styles from './footerAp.module.scss';
import Image from '../../contents/Image/Image';
import pc from '@/ui-kit/src/assets/images/footer_pc.png';
import mo from '@/ui-kit/src/assets/images/footer_mo.png';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import { BoxSize } from '@/ui-kit/src/types';

type FooterProps = {
    children: React.ReactNode;
    bottomPaddingPc?: BoxSize;
    bottomPaddingMo?: BoxSize;
};

const FooterAp = ({ children, bottomPaddingPc, bottomPaddingMo }: FooterProps) => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footerContent}>{children}</div>
            <Image image={pc.src} width="100%" className={styles.pc} />
            <Image image={mo.src} width="100%" className={styles.mo} />
            <Item desktop>
                <Box height={bottomPaddingPc}></Box>
            </Item>
            <Item mobile>
                <Box height={bottomPaddingMo}></Box>
            </Item>
        </div>
    );
};

export default FooterAp;
