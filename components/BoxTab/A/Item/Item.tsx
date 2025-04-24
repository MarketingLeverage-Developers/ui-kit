import React from 'react';
import styles from './Item.module.scss';
import Flex from '@/ui-kit/components/Flex/Flex';
import Text from '@/ui-kit/components/Text/Text';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';

type ItemProps = {
    image: string;
    label: string;
    value: string;
    onItemClick?: (value: string) => void;
};

const Item = ({ image, label, value, onItemClick }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.ItemBox, {
        [styles.Active]: isActiveTab(value),
    });

    return (
        <TabGroup.Item value={value} className={styles.Item} onClick={() => onItemClick(value)}>
            <Flex direction="column" gap={15} align="center">
                <Flex
                    justify="center"
                    align="center"
                    className={className}
                    style={{ width: 'var(--box-100)', height: 'var(--box-100)' }}
                >
                    <img src={image} alt="이미지" />
                </Flex>

                <Text size={20} weight={500} color="#111">
                    {label}
                </Text>
            </Flex>
        </TabGroup.Item>
    );
};

export default Item;
