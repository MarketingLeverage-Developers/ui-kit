import React from 'react';
import styles from './PaginationA.module.scss';
import SizeSelect from './SizeSelect/SizeSelect';
import PagingButtons from './PagingButtons/PagingButtons';
import FastPrev from './PagingButtons/FastPrev/FastPrev';
import Prev from './PagingButtons/Prev/Prev';
import Pages from './PagingButtons/Pages/Pages';
import Next from './PagingButtons/Next/Next';
import FastNext from './PagingButtons/FastNext/FastNext';
import Pagination, { PaginationValueType } from '@/headless/Pagination/Pagination';

type PaginationAProps = {
    children: React.ReactNode;
    defaultValue?: PaginationValueType;
};

const PaginationA = ({ children, defaultValue }: PaginationAProps) => {
    return (
        <Pagination defaultValue={defaultValue}>
            <div className={styles.PaginationA}>{children}</div>
        </Pagination>
    );
};

export default PaginationA;

PaginationA.SizeSelect = SizeSelect;
PaginationA.PagingButtons = PagingButtons;
PaginationA.FastPrev = FastPrev;
PaginationA.Prev = Prev;
PaginationA.Pages = Pages;
PaginationA.Next = Next;
PaginationA.FastNext = FastNext;
