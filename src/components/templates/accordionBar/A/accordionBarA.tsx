'use client';
import styles from './accordionBarA.module.scss';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
    title?: string;
    content?: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
};

const AccordionBarA = ({ title, content, onToggle, isOpen }: Props) => {
    return (
        <div
            className={classNames(styles.container, {
                [styles.open]: isOpen,
            })}
            onClick={onToggle}
        >
            <div className={styles.TitleLine}>
                <div className={styles.title}>{title}</div>
                <MdKeyboardArrowDown />
            </div>
            {isOpen && <div className={`${styles.AnswerWrapper} ${isOpen && styles.open}`}>{content}</div>}
        </div>
    );
};
export default AccordionBarA;
