import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types/types';
import { config } from '@/ui-kit/configs/config';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    color?: HexColor;
};

const Item = ({ color = config.theme.primaryColor ?? '#E88731', ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--active-background-color': color,
    };

    return (
        <TabGroup.Item {...props} className={className} style={{ ...props, ...cssVariables }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default Item;
