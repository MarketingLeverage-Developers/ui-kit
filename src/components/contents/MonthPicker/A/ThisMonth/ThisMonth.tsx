import React from 'react';
import ButtonE from '../../../Button/E/ButtonE';
import Text from '../../../Text/Text';

type ThisMonthProps = {
    onButtonClick: (value: Date) => void;
};

const ThisMonth = ({ onButtonClick }: ThisMonthProps) => {
    const handleTodayClick = () => {
        const now = new Date();
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1); // 이번 달 1일
        onButtonClick(thisMonth);
    };

    return (
        <ButtonE backgroundColor="#fff" color="#D5D5D5" size="2xs" onClick={handleTodayClick}>
            <Text color="#474747" weight={400}>
                이번 달
            </Text>
        </ButtonE>
    );
};

export default ThisMonth;
