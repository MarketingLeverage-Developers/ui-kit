import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import classNames from 'classnames';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    value: string;
    disabled?: boolean;
};

const Item = ({ value, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(value),
        [styles.Disabled]: props.disabled,
    });

    return <TabGroup.Item {...props} value={value} className={className} />;
};

export default Item;
