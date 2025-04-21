import React from 'react';
import Item from './Item/Item';
import TabGroup from '@/headless/TabGroup/TabGroup';

type BoxTabAProps = React.ComponentProps<typeof TabGroup>;

const BoxTabA = (props: BoxTabAProps) => {
    return <TabGroup {...props}>{props.children}</TabGroup>;
};

export default BoxTabA;

BoxTabA.Item = Item;
