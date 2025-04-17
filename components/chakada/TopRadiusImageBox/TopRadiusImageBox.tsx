import React from 'react';
import Box from '../Box/Box';
import Padding from '@/ui-kit/wireframes/Padding/Padding';
import styles from './TopRadiusImageBox.module.scss';

type TopRadiusImageBoxProps = {
    image: string;
};

const TopRadiusImageBox = ({ image }: TopRadiusImageBoxProps) => {
    return (
        <Box className={styles.TopRadiusImageBox} backgroundColor="#f5f5f5">
            <Padding y={35}>
                <img width={'100%'} height={'100%'} src={image} alt="이미지" />
            </Padding>
        </Box>
    );
};

export default TopRadiusImageBox;
