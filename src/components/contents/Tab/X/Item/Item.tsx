import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '../../../../../types';

type ItemProps = {
    image: string;
    value: string;
    color?: HexColor;
    onItemClick: (value: string) => void;
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
