import React from 'react';
import Item from './Item/Item';
import TabGroup from '@/headless/TabGroup/TabGroup';

type TabXProps = React.ComponentProps<typeof TabGroup>;

const TabX = (props: TabXProps) => {
    return <TabGroup {...props}>{props.children}</TabGroup>;
};

export default TabX;

TabX.Item = Item;
