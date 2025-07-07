import React from 'react';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { ContentSize, CSSPropertiesWithVars } from '../../../../../types';
import classNames from 'classnames';
import { TabItemStyle, useTabStyleContext } from '../../TabStyleContext';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & TabItemStyle;

const Item = ({ ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();
    const { itemStyle, size, s } = useTabStyleContext();

    console.log('사이즈', size);

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
        [styles.Disabled]: props.disabled,
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': props.bgColor ?? itemStyle?.bgColor,
        '--active-background-color': props.activeBgColor ?? itemStyle?.activeBgColor,
        '--font-size': toFont(props.fontSize ?? itemStyle?.fontSize),
        '--color': props.color ?? itemStyle?.color,
        '--padding': spacingToSpace(props.padding ?? itemStyle?.padding),
        '--width': s ? dimensionToString(itemStyle?.width) : dimensionToVariable(itemStyle?.width),
        '--height': s ? dimensionToString(itemStyle?.height) : dimensionToVariable(itemStyle?.height),
    };

    return (
        <TabGroup.Item {...props} className={className} style={{ ...cssVariables, ...props.style }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default Item;
