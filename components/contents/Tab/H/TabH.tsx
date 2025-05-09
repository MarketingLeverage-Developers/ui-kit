import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabH.module.scss';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Item from './Item/Item';
import classNames from 'classnames';
import { ContentSize } from '@/ui-kit/types/types';

type TabHProps = React.ComponentProps<typeof TabGroup> & {
    size?: ContentSize;
};

const TabH = ({ size = 'md', ...props }: TabHProps) => {
    const className = classNames(styles.TabH, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    return (
        <TabGroup {...props}>
            <Flex className={className}>{props.children}</Flex>
        </TabGroup>
    );
};

export default TabH;

TabH.Item = Item;
