import ButtonU from '../../../Button/U/ButtonU';
import { IoIosArrowBack } from 'react-icons/io';
import { useMonthPickerA } from '../MonthPickerA';

type PrevMonthProps = {
    onButtonClick: (value: Date) => void;
};

const PrevMonth = ({ onButtonClick }: PrevMonthProps) => {
    const { pickerValue } = useMonthPickerA();

    const handleClick = () => {
        const base = pickerValue ?? new Date(); // 선택된 값 없으면 현재 기준
        const prevMonth = new Date(base.getFullYear(), base.getMonth() - 1, 1); // 지난달 1일
        onButtonClick(prevMonth);
    };

    return (
        <ButtonU size="2xs" radius={8} borderColor="#D5D5D5" onClick={handleClick}>
            <IoIosArrowBack />
        </ButtonU>
    );
};

export default PrevMonth;
