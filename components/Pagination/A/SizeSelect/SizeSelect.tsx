import { PaginationValueType, usePagination } from '@/headless/Pagination/Pagination';
// import { FaBook } from 'react-icons/fa';

type SizeSelectProps = {
    onPageSizeSelectChange?: (paginationValue: PaginationValueType) => void;
};

const SizeSelect = ({ onPageSizeSelectChange }: SizeSelectProps) => {
    const paginationSizes = [5, 10, 20];
    const { changeSize, paginationValue } = usePagination();

    const handleSelectItemClick = async (value: string) => {
        const newPaginationValue = changeSize(parseInt(value));
        if (onPageSizeSelectChange) {
            await onPageSizeSelectChange(newPaginationValue);
        }
    };

    return (
        // <BasicSelect defaultValue={paginationValue.size.toString()}>
        //     <BasicSelect.Trigger icon={<FaBook width={14} height={14} />} label={'페이지 사이즈'} />
        //     <BasicSelect.Content>
        //         {paginationSizes.map((pageSize, index) => (
        //             <BasicSelect.Item
        //                 key={index}
        //                 value={pageSize.toString()}
        //                 onBasicSelectItemClick={() => handleSelectItemClick(pageSize.toString())}
        //             >
        //                 {pageSize}
        //             </BasicSelect.Item>
        //         ))}
        //     </BasicSelect.Content>
        // </BasicSelect>
        <div>페이지조절</div>
    );
};

export default SizeSelect;
