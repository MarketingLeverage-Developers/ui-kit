import classNames from 'classnames';
import Pagination, { usePagination } from '@/headless/Pagination/Pagination';
import BaseNext from '@/headless/Pagination/Next';
import React from 'react';
import styles from '../PagingButtons.module.scss';

type NextProps = React.ComponentProps<typeof BaseNext>;

const Next = (props: NextProps) => {
    const { hasNextPage } = usePagination();

    const hasNoNextPage = !hasNextPage;

    const combinedClassName = classNames(styles.PagingButton, {
        [styles.Disabled]: hasNoNextPage,
    });

    return <Pagination.Next className={combinedClassName} {...props} />;
};

export default Next;
