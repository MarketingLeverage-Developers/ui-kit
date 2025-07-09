import React, { useState } from 'react';
import SelectB from '../../../Select/B/SelectB';
import { isSameDay, startOfDay, endOfDay, startOfWeek, endOfWeek, subDays, subWeeks, subMonths } from 'date-fns';

// 범위 타입
export type RangePreset = {
    label: string;
    value: string;
    getRange: () => { from: Date; to: Date };
};

const rangePresets: RangePreset[] = [
    {
        label: '최근 1주일',
        value: 'last_7_days',
        getRange: () => {
            const to = endOfDay(new Date());
            const from = startOfDay(subDays(to, 6)); // 오늘 포함 7일
            return { from, to };
        },
    },
    {
        label: '최근 1개월',
        value: 'last_1_month',
        getRange: () => {
            const to = endOfDay(new Date());
            const from = startOfDay(subMonths(to, 1));
            return { from, to };
        },
    },
    {
        label: '최근 3개월',
        value: 'last_3_months',
        getRange: () => {
            const to = endOfDay(new Date());
            const from = startOfDay(subMonths(to, 3));
            return { from, to };
        },
    },
    {
        label: '최근 6개월',
        value: 'last_6_months',
        getRange: () => {
            const to = endOfDay(new Date());
            const from = startOfDay(subMonths(to, 6));
            return { from, to };
        },
    },
];

type RangeSelectProps = {
    onChangeRange?: (range: { from: Date; to: Date }, presetValue: string) => void;
    defaultValue?: string;
};

const RangeSelect = ({ onChangeRange, defaultValue = 'today' }: RangeSelectProps) => {
    const [selected, setSelected] = useState<string>(defaultValue);

    const handleSelect = (value: string) => {
        setSelected(value);
        const preset = rangePresets.find((r) => r.value === value);
        if (preset && onChangeRange) {
            onChangeRange(preset.getRange(), preset.value);
        }
    };

    const currentLabel = rangePresets.find((r) => r.value === selected)?.label || '날짜 선택';

    return (
        <SelectB defaultValue={selected}>
            <SelectB.Trigger
                render={() => (
                    <div>
                        <span>{currentLabel}</span>
                    </div>
                )}
            />
            <SelectB.Content>
                {rangePresets.map((preset) => (
                    <SelectB.Item
                        key={preset.value}
                        value={preset.value}
                        onSelectGroupItemClick={() => handleSelect(preset.value)}
                    >
                        {preset.label}
                    </SelectB.Item>
                ))}
            </SelectB.Content>
        </SelectB>
    );
};

export default RangeSelect;
