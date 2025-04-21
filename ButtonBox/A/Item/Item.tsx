import React from 'react';
import styles from './Item.module.scss';
import Flex from '@/ui-kit/Flex/Flex';
import Text from '@/ui-kit/Text/Text';

type ItemProps = {
    image: string;
    label: string;
};

const Item = ({ image, label }: ItemProps) => {
    return (
        <Flex direction="column" gap={15}>
            <Flex justify="center" align="center" className={styles.ItemBox}>
                <img src={image} alt="이미지" />
            </Flex>
            <Text size={20} weight={500} color="#111">
                {label}
            </Text>
        </Flex>
    );
};

export default Item;
