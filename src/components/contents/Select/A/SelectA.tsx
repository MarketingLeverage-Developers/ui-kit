import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './SelectA.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import SelectAContextProvider from './SelectAContext';
import classNames from 'classnames';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToString, dimensionToVariable } from '@/ui-kit/src/utils';

type SelectAProps = React.ComponentProps<typeof SelectGroup> & React.ComponentProps<typeof SelectAContextProvider> & {};

const SelectA = ({ size = 'md', ...props }: SelectAProps) => {
    const className = classNames(styles.Box, {
        // 추가할것들
    });
    const cssVariables: CSSPropertiesWithVars = {
        '--width': props.s
            ? dimensionToString(props?.wrapperStyle?.width)
            : dimensionToVariable(props?.wrapperStyle?.width),
    };
    return (
        <SelectAContextProvider {...props}>
            <SelectGroup {...props}>
                <Dropdown>
                    <Dropdown.Box className={className} style={{ ...cssVariables }}>
                        {props.children}
                    </Dropdown.Box>
                </Dropdown>
            </SelectGroup>
        </SelectAContextProvider>
    );
};

export default SelectA;

SelectA.Item = Item;
SelectA.Content = Content;
SelectA.Trigger = Trigger;
