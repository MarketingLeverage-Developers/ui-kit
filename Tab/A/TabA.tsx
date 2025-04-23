import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabA.module.scss';
import Flex from '@/ui-kit/Flex/Flex';
import Item from './Item/Item';

type TabProps = React.ComponentProps<typeof TabGroup>;

const TabA = (props: TabProps) => {
    return (
        <TabGroup {...props}>
            <Flex className={styles.TabA} style={{ width: '100%' }}>
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default TabA;

TabA.Item = Item;
