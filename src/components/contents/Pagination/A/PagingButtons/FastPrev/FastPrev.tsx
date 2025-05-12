import classNames from 'classnames';
import BaseFastPrev from '@/headless/Pagination/FastPrev';
import React from 'react';
import styles from '../PagingButtons.module.scss';
import Pagination, { usePagination } from '@/headless/Pagination/Pagination';

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
