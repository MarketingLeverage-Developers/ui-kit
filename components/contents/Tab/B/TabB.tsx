import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabB.module.scss';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Item from './Item/Item';
import LeftItem from './LeftItem/LeftItem';
import RightItem from './RightItem/RightItem';

type TabBProps = React.ComponentProps<typeof TabGroup>;

const TabB = (props: TabBProps) => {
    return (
        <TabGroup {...props}>
            <Flex className={styles.TabB}>{props.children}</Flex>
        </TabGroup>
    );
};

export default TabB;

TabB.Item = Item;
TabB.LeftItem = LeftItem;
TabB.RightItem = RightItem;
