import TabGroup from '@/headless/TabGroup/TabGroup';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';

type TabUProps = React.ComponentProps<typeof TabGroup>;

const TabU = (props: TabUProps) => {
    return (
        <TabGroup {...props}>
            <Flex gap={15}>{props.children}</Flex>
        </TabGroup>
    );
};

export default TabU;

TabU.Item = Item;
