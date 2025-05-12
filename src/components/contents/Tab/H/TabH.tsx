import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabH.module.scss';
import Item from './Item/Item';
import classNames from 'classnames';
import { ContentSize } from '../../../../types';
import Flex from '../../../layouts/Flex/Flex';

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
