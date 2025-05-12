import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabA.module.scss';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';

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
