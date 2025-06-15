import React from 'react';
import ButtonE from '../../../Button/E/ButtonE';
import Text from '../../../Text/Text';

type ToDayProps = {
    onButtonClick: (value: Date) => void;
};

const Today = ({ onButtonClick }: ToDayProps) => {
    const handleTodayClick = () => {
        const today = new Date();
        onButtonClick(today);
    };

    return (
        <ButtonE backgroundColor="#fff" color="#D5D5D5" size="2xs" onClick={handleTodayClick}>
            <Text color="#474747" weight={400}>
                오늘
            </Text>
        </ButtonE>
    );
};

export default Today;
