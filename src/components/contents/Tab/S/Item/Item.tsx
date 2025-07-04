import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '../../../../../types';

type ItemProps = {
    image: string;
    value: string;
    onItemClick: (value: string) => void;
    color?: HexColor;
};

const Item = ({ image, value, color, onItemClick }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(value),
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup.Item
            value={value}
            className={className}
            style={{ ...cssVariables }}
            onTabGroupItemClick={() => onItemClick(value)}
        >
            <img src={image} alt="이미지" />
        </TabGroup.Item>
    );
};

export default Item;
{
    /* <TabGroup.Item value={value} className={styles.Item} onClick={() => onItemClick(value)}>
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
</TabGroup.Item>; */
}
