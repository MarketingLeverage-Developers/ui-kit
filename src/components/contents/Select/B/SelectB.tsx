import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './SelectB.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type SelectBProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const SelectB = ({ children, defaultValue }: SelectBProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles.Box}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default SelectB;

SelectB.Item = Item;
SelectB.Content = Content;
SelectB.Trigger = Trigger;
