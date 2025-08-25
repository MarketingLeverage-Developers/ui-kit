import React from 'react';
import styles from './footerAp.module.scss';
import Image from '../../contents/Image/Image';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import { BoxSize, HexColor } from '@/ui-kit/src/types';

type FooterProps = {
    children: React.ReactNode;
    bottomPaddingPc?: BoxSize;
    bottomPaddingMo?: BoxSize;
    imgPc: string;
    imgMo: string;
    bgColor?: HexColor;
    maxWidth?: number;
    imageShow?: boolean;
};

const FooterAp = ({
    children,
    bottomPaddingPc,
    bottomPaddingMo,
    imgPc,
    imgMo,
    bgColor = '#303030',
    maxWidth = 1320,
    imageShow = true,
}: FooterProps) => {
    return (
        <div className={styles.Footer} style={{ backgroundColor: bgColor }}>
            <div className={styles.footerContent} style={{ maxWidth: `${maxWidth}px` }}>
                {children}
            </div>
            {imageShow && (
                <>
                    <Image image={imgPc} width="100%" className={styles.pc} />
                    <Image image={imgMo} width="100%" className={styles.mo} />
                </>
            )}
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
