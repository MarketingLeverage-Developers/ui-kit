import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabA.module.scss';
import Flex from '@/ui-kit/Flex/Flex';
import Item from './Item/Item';
import LeftItem from './LeftItem/LeftItem';
import RightItem from './RightItem/RightItem';

type TabProps = React.ComponentProps<typeof TabGroup>;

const TabA = (props: TabProps) => {
    return (
        <TabGroup {...props}>
            <Flex className={styles.TabA}>{props.children}</Flex>
        </TabGroup>
    );
};

export default TabA;

TabA.Item = Item;
TabA.LeftItem = LeftItem;
TabA.RightItem = RightItem;
