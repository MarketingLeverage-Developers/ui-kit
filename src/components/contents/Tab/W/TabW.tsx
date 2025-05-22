import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabW.module.scss';
import Item from './Item/Item';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';
import Flex from '../../../layouts/Flex/Flex';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import { HTMLAttributes } from 'react';

type TabWProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
    size?: ContentSize;
    width?: BoxSize | string;
} & HTMLAttributes<HTMLDivElement>;

const TabW = ({ size = 'md', width, color, ...props }: TabWProps) => {
    const className = classNames(styles.TabW, {
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
            <Flex className={className} style={{ ...cssVariables, ...props.style }}>
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default TabW;

TabW.Item = Item;
