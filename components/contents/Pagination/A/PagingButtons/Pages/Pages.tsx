import classNames from 'classnames';
import { usePagination } from '@/headless/Pagination/Pagination';
import React from 'react';
import styles from '../PagingButtons.module.scss';
import { PaginationValueType } from '@/headless/Pagination/Pagination';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

// type PagesProps = React.ReactCo

type PagesProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onPagesClick?: (paginationValue: PaginationValueType) => void;
    buttonColor?: HexColor;
};

const Pages = ({ onPagesClick, buttonColor = '#F98131', ...props }: PagesProps) => {
    const { paginationValue, goToPage, endPage, startPage } = usePagination();
    const { page } = paginationValue;

    const handlePagesClick = (pageValue: number) => {
        const newPaginationValue = goToPage(pageValue);
        onPagesClick && onPagesClick(newPaginationValue);
    };

    const cssVariables: CSSPropertiesWithVars = {
        '--button-color': buttonColor,
    };

    return (
        <>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                const currentPage = startPage + index;
                const isActive = currentPage === page;

                const combinedClassName = classNames(styles.PagingButton, {
                    [styles.Active]: isActive,
                });

                return (
                    <button
                        {...props}
                        key={currentPage}
                        onClick={() => handlePagesClick(currentPage)}
                        disabled={isActive}
                        className={combinedClassName}
                        style={{ ...cssVariables }}
                    >
                        {currentPage}
                    </button>
                );
            })}
        </>
    );
};

export default Pages;
