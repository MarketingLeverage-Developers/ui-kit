import classNames from 'classnames';
import Pagination, { usePagination } from '@/headless/Pagination/Pagination';
import BaseFastPrev from '@/headless/Pagination/FastPrev';
import React from 'react';
import styles from '../PagingButtons.module.scss';

type FastPrevProps = React.ComponentProps<typeof BaseFastPrev>;

const FastPrev = (props: FastPrevProps) => {
    const { hasFastPrevPage } = usePagination();

    const hasNoFastPrevPage = !hasFastPrevPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoFastPrevPage,
    });

    return <Pagination.FastPrev className={combinedClassName} {...props} />;
};

export default FastPrev;
