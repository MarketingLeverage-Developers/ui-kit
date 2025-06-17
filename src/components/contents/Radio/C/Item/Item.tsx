import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '../../../../../types';
import { FaCheck } from 'react-icons/fa6';
import { useRadioStyleContext } from '../../RadioStyleContext';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    label: string;
    color?: HexColor;
};

const Item = ({ label, color, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();
    const { disabled } = useRadioStyleContext();

    const isActive = isActiveTab(props.value);

    const wrapperClass = classNames(styles.Wrapper, {
        [styles.Disabled]: disabled,
    });

    const className = classNames(styles.Circle, {
        [styles.Active]: isActive,
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup.Item
            {...props}
            style={{ background: 'inherit', ...cssVariables }}
            className={wrapperClass}
            disabled={disabled}
        >
            <div className={styles.Content}>
                <div className={className}>{isActive && <FaCheck className={styles.CheckIcon} />}</div>
                <span className={styles.Text}>{label}</span>
            </div>
        </TabGroup.Item>
    );
};

export default Item;
