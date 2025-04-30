import React from 'react';
import styles from './Item.module.scss';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Text from '@/ui-kit/components/contents/Text/Text';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';

type ItemProps = {
    image: string;
    label: string;
    value: string;
    onItemClick: (value: string) => void;
};

const Item = ({ image, label, value, onItemClick }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.ItemBox, {
        [styles.Active]: isActiveTab(value),
    });

    return (
        <TabGroup.Item value={value} className={styles.Item} onClick={() => onItemClick(value)}>
            <Flex direction="column" gap={15} align="center" width={100}>
                <Flex justify="center" align="center" className={className}>
                    <img src={image} alt="이미지" />
                </Flex>
                <Flex>
                    <Text size={18} weight={500} color="#111" align="center">
                        {label}
                    </Text>
                </Flex>
            </Flex>
        </TabGroup.Item>
    );
};

export default Item;
