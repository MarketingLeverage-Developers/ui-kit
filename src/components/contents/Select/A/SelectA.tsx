import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './SelectA.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type SelectAProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const SelectA = ({ children, defaultValue }: SelectAProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles.Box}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default SelectA;

SelectA.Item = Item;
SelectA.Content = Content;
SelectA.Trigger = Trigger;
