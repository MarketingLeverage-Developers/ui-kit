import React from 'react';
import Item from './Item/Item';
import TabGroup from '@/headless/TabGroup/TabGroup';

type TabSProps = React.ComponentProps<typeof TabGroup>;

const TabS = (props: TabSProps) => {
    return <TabGroup {...props}>{props.children}</TabGroup>;
};

export default TabS;

TabS.Item = Item;
