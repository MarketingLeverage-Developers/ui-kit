import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';

type ItemProps = React.ComponentProps<typeof TabGroup.Item>;

const Item = (props: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={className} {...props} />;
};

export default Item;
