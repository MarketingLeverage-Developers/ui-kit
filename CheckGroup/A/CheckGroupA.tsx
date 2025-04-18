import TabGroup from '@/headless/TabGroup/TabGroup';
import Flex from '@/ui-kit/Flex/Flex';
import Item from './Item/Item';

type CheckGroupAProps = React.ComponentProps<typeof TabGroup>;

const CheckGroupA = (props: CheckGroupAProps) => {
    return (
        <TabGroup {...props}>
            <Flex gap={15}>{props.children}</Flex>
        </TabGroup>
    );
};

export default CheckGroupA;

CheckGroupA.Item = Item;
