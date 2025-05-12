import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../../types';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    color?: HexColor;
    variant?: 'combined' | 'outlined';
    size?: ContentSize;
};

const Item = ({ size = 'md', color, variant, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
        [styles.Outlined]: variant === 'outlined',
        // [styles.Sm]: size === 'sm',
        // [styles.Md]: size === 'md',
        // [styles.Lg]: size === 'lg',
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
