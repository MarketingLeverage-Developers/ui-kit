import classNames from 'classnames';
import Pagination, { usePagination } from '@/headless/Pagination/Pagination';
import FasNext from '@/headless/Pagination/FastNext';
import React from 'react';
import styles from '../PagingButtons.module.scss';

type FastNextProps = React.ComponentProps<typeof FasNext>;

const FastNext = (props: FastNextProps) => {
    const { hasFastNextPage } = usePagination();

    const hasNoFastNextPage = !hasFastNextPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoFastNextPage,
    });

    return <Pagination.FastNext className={combinedClassName} {...props} />;
};

export default FastNext;
