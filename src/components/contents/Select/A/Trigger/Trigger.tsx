import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import styles from './Trigger.module.scss';

type TriggerProps = {
    // icon: React.ReactNode;
    // label: React.ReactNode;
};

const Trigger = ({}: TriggerProps) => {
    const { selectGroupValue } = useSelectGroup();
    const isSelected = selectGroupValue !== '';

    // 동적으로 변경되는 부분은 인라인 스타일로 처리합니다.

    console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Dropdown.Trigger className={styles.Trigger}>
            <SelectGroup.Display className={styles.Display} />
        </Dropdown.Trigger>
    );
};

export default Trigger;
