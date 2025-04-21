import TabGroup from '@/headless/TabGroup/TabGroup';
import Flex from '@/ui-kit/Flex/Flex';
import Item from './Item/Item';

type RadioTabAProps = React.ComponentProps<typeof TabGroup>;

const RadioTabA = (props: RadioTabAProps) => {
    return (
        <TabGroup {...props}>
            <Flex gap={15}>{props.children}</Flex>
        </TabGroup>
    );
};

export default RadioTabA;

RadioTabA.Item = Item;
