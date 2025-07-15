import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import styles from './Trigger.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

type TriggerProps = {
    // icon: React.ReactNode;
    // label: React.ReactNode;
    render?: (value: string) => React.ReactNode;
};

const Trigger = ({ render }: TriggerProps) => {
    const { selectGroupValue } = useSelectGroup();
    const isSelected = selectGroupValue !== '';

    // 동적으로 변경되는 부분은 인라인 스타일로 처리합니다.

    // console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Dropdown.Trigger className={styles.Trigger}>
            <SelectGroup.Display className={styles.Display} render={render} />
            <MdKeyboardArrowDown className={styles.Icon} />
        </Dropdown.Trigger>
    );
};

export default Trigger;
