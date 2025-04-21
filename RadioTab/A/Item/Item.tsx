import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import Flex from '@/ui-kit/Flex/Flex';
import Text from '@/ui-kit/Text/Text';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    label: string;
};

const Item = ({ label, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
    });

    return (
        <TabGroup.Item {...props} style={{ background: 'inherit' }}>
            <Flex gap={15} align="center">
                <div className={className} />
                <Text size={18}>{label}</Text>
            </Flex>
        </TabGroup.Item>
    );
};

export default Item;
