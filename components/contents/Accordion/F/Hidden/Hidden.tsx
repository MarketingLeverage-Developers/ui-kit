import React from 'react';
import styles from './Hidden.module.scss';
import classNames from 'classnames';
import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import Box from '@/ui-kit/components/layouts/Box/Box';

type HiddenProps = {
    children: React.ReactNode;
};

const Hidden = ({ children }: HiddenProps) => {
    const { accordionValue } = useAccordion();

    const combinedStyle = classNames(styles.Hidden, {
        [styles.Open]: accordionValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !accordionValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    return (
        <Accordion.Hidden className={combinedStyle}>
            <div className={styles.Content}>{children}</div>
        </Accordion.Hidden>
    );
};

export default Hidden;
