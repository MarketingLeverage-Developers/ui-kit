import TabGroup from '@/headless/TabGroup/TabGroup';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';

type RadioAProps = React.ComponentProps<typeof TabGroup>;

const RadioA = (props: RadioAProps) => {
    return (
        <TabGroup {...props}>
            <Flex gap={15} wrap="wrap">
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default RadioA;

RadioA.Item = Item;
