import classNames from 'classnames';
import styles from './RightItem.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type RightItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    activeBackgroundColor?: HexColor;
};

const RightItem = ({ activeBackgroundColor = '#e88731', ...props }: RightItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.RightItem, {
        [styles.Active]: isActiveTab(props.value),
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
