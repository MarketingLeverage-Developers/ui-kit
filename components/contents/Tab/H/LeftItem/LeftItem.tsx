import classNames from 'classnames';
import styles from './LeftItem.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type LeftItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    activeBackgroundColor?: HexColor;
    variant?: 'combined' | 'outlined';
};

const LeftItem = ({ activeBackgroundColor = '#E88731', variant, ...props }: LeftItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.LeftItem, {
        [styles.Active]: isActiveTab(props.value),
        [styles.Outlined]: variant === 'outlined',
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--active-background-color': activeBackgroundColor,
    };

    return (
        <TabGroup.Item {...props} className={className} style={{ ...props, ...cssVariables }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default LeftItem;
