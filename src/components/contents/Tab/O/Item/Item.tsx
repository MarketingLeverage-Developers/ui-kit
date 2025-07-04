import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../../types';
import { TabItemStyle, useTabOContext } from '../TabOContext';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & TabItemStyle;

const Item = ({ ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();
    const { itemStyle, size, s } = useTabOContext();

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
        '--font-size': s
            ? dimensionToString(props.fontSize ?? itemStyle?.fontSize)
            : toFont(props.fontSize ?? itemStyle?.fontSize),
        '--color': props.color ?? itemStyle?.color,
        '--padding': s
            ? spacingToString(props.padding ?? itemStyle?.padding)
            : spacingToSpace(props.padding ?? itemStyle?.padding),
        '--width': s
            ? dimensionToString(props.width ?? itemStyle?.width)
            : dimensionToVariable(props.width ?? itemStyle?.width),
        '--height': s
            ? dimensionToString(props.height ?? itemStyle?.height)
            : dimensionToVariable(props.height ?? itemStyle?.height),
    };

    return (
        <TabGroup.Item {...props} className={className} style={{ ...cssVariables, ...props.style }}>
            {props.children}
        </TabGroup.Item>
    );
};

export default Item;
