import React from 'react';
import Padding from '@/ui-kit/Padding/Padding';
import styles from './ImageBox.module.scss';
import BoxA from '@/ui-kit/Box/A/BoxA';

type ImageBoxProps = {
    image: string;
    padding?: boolean;
    tags?: React.ReactNode;
};

const ImageBox = ({ image, tags, padding }: ImageBoxProps) => {
    return (
        <BoxA className={styles.ImageBox} backgroundColor="#f5f5f5">
            <Padding y={padding ? 35 : 0}>
                <img
                    width={'100%'}
                    height={'100%'}
                    src={image}
                    alt="이미지"
                    style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
                <div className={styles.Tags}>{tags}</div>
            </Padding>
        </BoxA>
    );
};

export default ImageBox;
