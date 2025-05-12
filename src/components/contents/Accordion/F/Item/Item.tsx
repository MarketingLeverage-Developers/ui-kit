import React from 'react';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import { FaCheck } from 'react-icons/fa6';
import styles from './Item.module.scss';
import { useAccordion } from '@/headless/Accordion/Accordion';

type ItemProps = {
    value: string | { label: string; value: string };
    onItemClick?: (value: string | { label: string; value: string }) => void;
};

const Item = ({ value, onItemClick }: ItemProps) => {
    const { hideAccordion } = useAccordion();
    const { selectGroupValue } = useSelectGroup();

    // 1) 렌더링할 라벨
    const displayLabel = typeof value === 'string' ? value : value.label;

    // 2) 비교용 실제 값
    const realValue = typeof value === 'string' ? value : value.value;
    const realSelected = typeof selectGroupValue === 'string' ? selectGroupValue : selectGroupValue.value;

    const isCurrentItem = realValue === realSelected;

    const handleClick = (v: typeof value) => {
        onItemClick?.(v);
        hideAccordion();
    };

    return (
        <SelectGroup.Item className={styles.Item} value={value} onSelectGroupItemClick={handleClick}>
            <div className={styles.LabelWrapper}>
                <div className={styles.Label}>{displayLabel}</div>
                {isCurrentItem && <FaCheck width={16} color="#f98131" />}
            </div>
        </SelectGroup.Item>
    );
};

export default Item;
