import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import styles from './SelectE.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import classNames from 'classnames';
import Trigger from './Trigger/Trigger';
import { dimensionToSpace, dimensionToString, dimensionToVariable } from '@/ui-kit/src/utils';
import SelectEContextProvider from './SelectEContext';

type SelectEProps = React.ComponentProps<typeof SelectGroup> &
    React.ComponentProps<typeof SelectEContextProvider> & { width?: string };

const SelectE = ({ size = 'md', ...props }: SelectEProps) => {
    const className = classNames(styles.Box, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': props?.wrapperStyle?.bgColor,
        '--border-color': props?.wrapperStyle?.borderColor,
        '--width': props.s
            ? dimensionToString(props?.wrapperStyle?.width)
            : dimensionToVariable(props?.wrapperStyle?.width),
        // '--gap': dimensionToSpace(props?.wrapperStyle?.gap),
    };

    return (
        <SelectEContextProvider {...props}>
            <SelectGroup {...props}>
                <Dropdown>
                    <Dropdown.Box className={className} style={{ ...cssVariables }}>
                        {props.children}
                    </Dropdown.Box>
                </Dropdown>
            </SelectGroup>
        </SelectEContextProvider>
    );
};

export default SelectE;

SelectE.Item = Item;
SelectE.Content = Content;
SelectE.Trigger = Trigger;
