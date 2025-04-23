import classNames from 'classnames';
import styles from './RightItem.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type RightItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    activeBackgroundColor?: HexColor;
    variant?: 'combined' | 'outlined';
};

const RightItem = ({ activeBackgroundColor = '#e88731', variant, ...props }: RightItemProps) => {
    const { isActiveTab } = useTabGroup();

    console.log('variant', variant);

    const className = classNames(styles.RightItem, {
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

export default RightItem;
