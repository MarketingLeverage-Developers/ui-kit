import { useDropdown } from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './Item.module.scss';
import { SelectGroupValue } from '@/headless/SelectGroup/SelectGroupItem';
import classNames from 'classnames';
import { ContentSize } from '@/ui-kit/src/types';
import { useSelectBContext } from '../SelectB';

type Item = React.ComponentProps<typeof SelectGroup.Item> & {};

const Item = ({ value, onSelectGroupItemClick, children }: Item) => {
    const { closeDropdown } = useDropdown();
    const { selectGroupValue } = useSelectGroup();
    const { size } = useSelectBContext();

    console.log('사이즈', size);

    const isCurrentItem = value === selectGroupValue;

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

    return (
        <SelectGroup.Item
            className={combinedStyle}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            {/* <FlexBox justifyContent="space-between" width={`100%`}> */}

            {/* {isCurrentItem && <FaCheck width={16} color="#f98131" />} */}
            {/* </FlexBox> */}
            {children}
        </SelectGroup.Item>
    );
};

export default Item;
