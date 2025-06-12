import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import styles from './SelectB.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import { BoxSize, ContentSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import classNames from 'classnames';
import Trigger from './Trigger/Trigger';
import { dimensionToVariable } from '@/ui-kit/src/utils';

export interface SelectBContextType {
    size: ContentSize;
}

const SelectBContext = React.createContext<SelectBContextType | undefined>(undefined);

export const useSelectBContext = () => {
    const context = React.useContext(SelectBContext);
    if (!context) {
        throw new Error('useSelectBContext must be used within a SelectBProvider');
    }
    return context;
};

type SelectBProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
    size?: ContentSize;
    width?: BoxSize | string;
    full?: boolean;
};

const SelectB = ({ children, defaultValue, width, size = 'md', full }: SelectBProps) => {
    const combinedStyle = classNames(styles.Box, {
        [styles.Full]: full,
    });

    const cssVariables: React.CSSProperties = {
        '--width': dimensionToVariable(width),
    } as React.CSSProperties;

    return (
        <SelectBContext.Provider value={{ size }}>
            <SelectGroup defaultValue={defaultValue}>
                <Dropdown>
                    <Dropdown.Box className={combinedStyle} style={{ ...cssVariables }}>
                        {children}
                    </Dropdown.Box>
                </Dropdown>
            </SelectGroup>
        </SelectBContext.Provider>
    );
};

export default SelectB;

SelectB.Item = Item;
SelectB.Content = Content;
SelectB.Trigger = Trigger;
