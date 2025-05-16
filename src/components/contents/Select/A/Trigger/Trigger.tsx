import React from 'react';
import Dropdown from 'headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import FlexBox from 'headful/Flex/Flex';
import styles from './Trigger.module.scss';

type TriggerProps = {
    icon: React.ReactNode;
    label: React.ReactNode;
};

const Trigger = ({ icon, label }: TriggerProps) => {
    const { selectGroupValue } = useSelectGroup();
    const isSelected = selectGroupValue !== '';

    // 동적으로 변경되는 부분은 인라인 스타일로 처리합니다.
    const inlineTriggerStyle: React.CSSProperties = {
        border: `1px solid ${isSelected ? '#3b86c8' : '#dbdbdb'}`,
        color: isSelected ? '#3b86c8' : '#242a307a',
        fontWeight: isSelected ? 600 : 500,
    };

    const inlineDisplayStyle: React.CSSProperties = {
        color: isSelected ? '#1C5592' : undefined,
    };

    console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Dropdown.Trigger className={styles.Trigger} style={inlineTriggerStyle}>
            <FlexBox gap={4} alignItems="center">
                {/* {icon} */}
                {label}
                <SelectGroup.Display className={styles.Display} style={inlineDisplayStyle} />
                {/* 필요 시 아래와 같이 아이콘을 조건에 따라 렌더링할 수 있습니다.
            {selectGroupValue !== '' ? (
              <VscClose width={10} height={10} />
            ) : (
              <PolygonImage width={8} height={6} />
            )}
        */}
            </FlexBox>
        </Dropdown.Trigger>
    );
};

export default Trigger;
