import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import styles from './SelectB.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import classNames from 'classnames';
import Trigger from './Trigger/Trigger';
import { dimensionToSpace, dimensionToString, dimensionToVariable } from '@/ui-kit/src/utils';
import SelectBContextProvider from './SelectBContext';

type SelectBProps = React.ComponentProps<typeof SelectGroup> &
    React.ComponentProps<typeof SelectBContextProvider> & { width?: string };

const SelectB = ({ size = 'md', ...props }: SelectBProps) => {
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
        <SelectBContextProvider {...props}>
            <SelectGroup {...props}>
                <Dropdown>
                    <Dropdown.Box className={className} style={{ ...cssVariables }}>
                        {props.children}
                    </Dropdown.Box>
                </Dropdown>
            </SelectGroup>
        </SelectBContextProvider>
    );
};

export default SelectB;

SelectB.Item = Item;
SelectB.Content = Content;
SelectB.Trigger = Trigger;
