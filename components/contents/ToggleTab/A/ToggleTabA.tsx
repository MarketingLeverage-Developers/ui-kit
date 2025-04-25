import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './ToggleTabA.module.scss';
import ToggleTabAItem from './ToggleTabAItem';

type ToggleTabProps = React.ComponentProps<typeof TabGroup>;

const ToggleTabA = (props: ToggleTabProps) => {
    return (
        <TabGroup {...props}>
            <div className={styles.ToggleTabA}>{props.children}</div>
        </TabGroup>
    );
};

export default ToggleTabA;

ToggleTabA.Item = ToggleTabAItem;
