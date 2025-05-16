import FlexBox from 'headful/Flex/Flex';
import { useDropdown } from 'headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './Item.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';

type Item = {
    children: React.ReactNode;
    value: string;
    onItemClick?: (value: string) => void;
};

const Item = ({ children, value, onItemClick }: Item) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async (value: SelectGroupValue) => {
        onItemClick && onItemClick(value as string);
        closeDropdown();
    };

    return (
        <SelectGroup.Item
            className={styles.Item}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            <FlexBox justifyContent="space-between" width={`100%`}>
                <div>{children}</div>
                {isCurrentItem && <FaCheck width={16} color="#f98131" />}
            </FlexBox>
        </SelectGroup.Item>
    );
};

export default Item;
