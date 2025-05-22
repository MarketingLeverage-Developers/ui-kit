import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { ContentSize } from '../../../../../types';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    variant?: 'combined' | 'outlined';
    size?: ContentSize;
};

const Item = ({ size = 'md', variant, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
        [styles.Outlined]: variant === 'outlined',
        // [styles.Sm]: size === 'sm',
        // [styles.Md]: size === 'md',
        // [styles.Lg]: size === 'lg',
    });

    return (
        <TabGroup.Item {...props} className={className} style={{ ...props }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default Item;
