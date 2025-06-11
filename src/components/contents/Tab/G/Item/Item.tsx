import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../../types';
import classNames from 'classnames';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    variant?: 'combined' | 'outlined';
    size?: ContentSize;
};

const Item = ({ size = 'md', variant, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item_G, {
        [styles.Active]: isActiveTab(props.value),
        [styles.Outlined]: variant === 'outlined',
        // [styles.Sm]: size === 'sm',
        // [styles.Md]: size === 'md',
        // [styles.Lg]: size === 'lg',
    });
    return (
        <TabGroup.Item {...props} className={className} style={{ ...props }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default Item;
