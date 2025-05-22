import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabO.module.scss';
import Item from './Item/Item';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';
import Flex from '../../../layouts/Flex/Flex';
import { dimensionToVariable } from '@/ui-kit/src/utils';

type TabOProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
    size?: ContentSize;
    width?: BoxSize | string;
};

const TabO = ({ size = 'md', width, color, ...props }: TabOProps) => {
    const className = classNames(styles.TabO, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--width': dimensionToVariable(width),
    };

    return (
        <TabGroup {...props}>
            <Flex className={className} style={{ ...cssVariables }}>
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default TabO;

TabO.Item = Item;
