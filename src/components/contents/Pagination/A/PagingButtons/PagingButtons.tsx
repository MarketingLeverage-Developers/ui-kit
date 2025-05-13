import React from 'react';
import Pagination from '../PaginationA';
import { PaginationValueType } from '@/headless/Pagination/Pagination';
import { HexColor } from '../../../../../types';
import Flex from '../../../../layouts/Flex/Flex';
import styles from './PagingButtons.module.scss';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

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
                <MdOutlineKeyboardDoubleArrowLeft className={styles.Icon} />
            </Pagination.FastPrev>
            <Pagination.Prev onPrevClick={handlePrevButtonClick}>
                <MdOutlineKeyboardArrowLeft className={styles.Icon} />
            </Pagination.Prev>
            <Pagination.Pages buttonColor={buttonColor} onPagesClick={handlePagesButtonClick} />
            <Pagination.Next onNextClick={handleNextButtonClick}>
                <MdOutlineKeyboardArrowRight className={styles.Icon} />
            </Pagination.Next>
            <Pagination.FastNext onFastNextClick={handleFastNextButtonClick}>
                <MdOutlineKeyboardDoubleArrowRight className={styles.Icon} />
            </Pagination.FastNext>
        </Flex>
    );
};

export default PagingButtons;
