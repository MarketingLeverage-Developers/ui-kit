import React from 'react';
import Pagination from '../PaginationA';
import { PaginationValueType } from '@/headless/Pagination/Pagination';
import { HexColor } from '../../../../../types';
import Flex from '../../../../layouts/Flex/Flex';
import Image from '../../../Image/Image';
import DoubleLeftArrow from '../../../../../assets/images/x.svg';
import LeftArrow from '../../../../../assets/images/left-arrow.png';
import RightArrow from '../../../../../assets/images/right-arrow.png';
import DoubleRightArrow from '../../../../../assets/images/double-right-arrow.png';

type PagingButtonsProps = {
    buttonColor?: HexColor;
    onPagingButtonClick: (paginationValue: PaginationValueType) => void;
};

const PagingButtons = ({ buttonColor, onPagingButtonClick }: PagingButtonsProps) => {
    const handleFastPrevButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handlePrevButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handlePagesButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handleNextButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };
    const handleFastNextButtonClick = async (paginationValue: PaginationValueType) => {
        await onPagingButtonClick(paginationValue);
    };

    return (
        <Flex justify="center" align="center">
            <Pagination.FastPrev onFastPrevClick={handleFastPrevButtonClick}>
                <Image image={DoubleLeftArrow.src} height={20} />
            </Pagination.FastPrev>
            <Pagination.Prev onPrevClick={handlePrevButtonClick}>
                <Image image={LeftArrow.src} height={20} />
            </Pagination.Prev>
            <Pagination.Pages buttonColor={buttonColor} onPagesClick={handlePagesButtonClick} />
            <Pagination.Next onNextClick={handleNextButtonClick}>
                <Image image={RightArrow.src} height={20} />
            </Pagination.Next>
            <Pagination.FastNext onFastNextClick={handleFastNextButtonClick}>
                <Image image={DoubleRightArrow.src} height={20} />
            </Pagination.FastNext>
        </Flex>
    );
};

export default PagingButtons;
