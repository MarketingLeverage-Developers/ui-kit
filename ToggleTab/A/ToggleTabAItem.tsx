import classNames from 'classnames';
import styles from './ToggleTabItem.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';

type ToggleTabItemProps = React.ComponentProps<typeof TabGroup.Item>;

const ToggleTabItem = (props: ToggleTabItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.ToggleTabItem, {
        [styles.Active]: isActiveTab(props.value),
    });

    return <TabGroup.Item className={className} {...props} />;
};

export default ToggleTabItem;
