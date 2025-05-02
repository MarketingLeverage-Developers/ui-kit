import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabH.module.scss';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Item from './Item/Item';

type TabHProps = React.ComponentProps<typeof TabGroup>;

const TabH = (props: TabHProps) => {
    return (
        <TabGroup {...props}>
            <Flex className={styles.TabH}>{props.children}</Flex>
        </TabGroup>
    );
};

export default TabH;

TabH.Item = Item;
