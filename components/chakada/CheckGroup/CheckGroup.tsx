import TabGroup from '@/headless/TabGroup/TabGroup';
import Check from './Check/Check';
import Flex from '@/ui-kit/wireframes/Flex/Flex';
// import styles from './CheckGroup.module.scss';

type CheckGroupProps = React.ComponentProps<typeof TabGroup>;

const CheckGroup = (props: CheckGroupProps) => {
    return (
        <TabGroup {...props}>
            <Flex gap={15}>{props.children}</Flex>
        </TabGroup>
    );
};

export default CheckGroup;

CheckGroup.Check = Check;
