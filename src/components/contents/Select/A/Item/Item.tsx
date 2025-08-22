import { useDropdown } from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './Item.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import { SelectItemStyle, useSelectAContext } from '../SelectAContext';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import classNames from 'classnames';

type ItemProps = React.ComponentProps<typeof SelectGroup.Item> & SelectItemStyle;

const Item = ({ value, onSelectGroupItemClick, children, ...props }: ItemProps) => {
    const { closeDropdown } = useDropdown();
    const { size, s, itemStyle } = useSelectAContext();

    const handleBaiscSelectItemPageSizeItemClick = async (value: SelectGroupValue) => {
        onSelectGroupItemClick && onSelectGroupItemClick(value as string);
        closeDropdown();
    };

    const combinedStyle = classNames(styles.Item, {
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
        <SelectGroup.Item
            className={combinedStyle}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
            style={{ ...cssVariables, ...props.style }}
        >
            {children}
        </SelectGroup.Item>
    );
};

export default Item;
