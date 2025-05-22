import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabH.module.scss';
import Item from './Item/Item';
import classNames from 'classnames';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';
import Flex from '../../../layouts/Flex/Flex';

type TabHProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
    size?: ContentSize;
};

const TabH = ({ size = 'md', color, ...props }: TabHProps) => {
    const className = classNames(styles.TabH, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup {...props}>
            <Flex className={className} style={{ ...cssVariables }}>
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default TabH;

TabH.Item = Item;
