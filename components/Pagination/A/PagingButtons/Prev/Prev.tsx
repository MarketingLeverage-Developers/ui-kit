import classNames from 'classnames';
import Pagination, { usePagination } from '@/headless/Pagination/Pagination';
import BasePrev from '@/headless/Pagination/Prev';
import React from 'react';
import styles from '../PagingButtons.module.scss';

type PrevProps = React.ComponentProps<typeof BasePrev>;

const Prev = (props: PrevProps) => {
    const { hasPrevPage } = usePagination();

    const hasNoPrevPage = !hasPrevPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoPrevPage,
    });

    return <Pagination.Prev className={combinedClassName} {...props} />;
};

export default Prev;
