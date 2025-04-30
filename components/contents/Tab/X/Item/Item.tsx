import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';

type ItemProps = {
    image: string;
    value: string;
    onItemClick: (value: string) => void;
};

const Item = ({ image, value, onItemClick }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(value),
    });

    return (
        <TabGroup.Item value={value} className={className} onClick={() => onItemClick(value)}>
            <img src={image} alt="이미지" />
        </TabGroup.Item>
    );
};

export default Item;
