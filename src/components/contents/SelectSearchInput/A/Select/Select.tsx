import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './Select.module.scss';
import Item from './Item/Item';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type SelectProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
};

const Select = ({ children, defaultValue }: SelectProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles.Box}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default Select;

Select.Item = Item;
Select.Content = Content;
Select.Trigger = Trigger;
