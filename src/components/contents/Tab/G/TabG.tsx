import React from 'react';
import styles from './TabG.module.scss';
import TabGroup from '@/headless/TabGroup/TabGroup';
import Flex from '../../../layouts/Flex/Flex';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';
import classNames from 'classnames';
import Item from './Item/Item';

type TabProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
    size?: ContentSize;
};

const TabG = ({ size = 'md', color, ...props }: TabProps) => {
    const className = classNames(styles.TabG, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
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

export default TabG;

TabG.Item = Item;
