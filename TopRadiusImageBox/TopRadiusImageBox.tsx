import React from 'react';
import Padding from '@/ui-kit/Padding/Padding';
import styles from './TopRadiusImageBox.module.scss';
import BoxA from '../Box/A/BoxA';

type TopRadiusImageBoxProps = {
    image: string;
};

const TopRadiusImageBox = ({ image }: TopRadiusImageBoxProps) => {
    return (
        <BoxA className={styles.TopRadiusImageBox} backgroundColor="#f5f5f5">
            <Padding y={35}>
                <img width={'100%'} height={'100%'} src={image} alt="이미지" />
            </Padding>
        </BoxA>
    );
};

export default TopRadiusImageBox;
