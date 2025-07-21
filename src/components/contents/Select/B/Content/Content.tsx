import React from 'react';
import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';
import styles from './Content.module.scss';
import classNames from 'classnames';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';

type ContentProps = {
    children: React.ReactNode;
    maxHeight?: BoxSize | string | number;
};

const Content = ({ children, maxHeight }: ContentProps) => {
    const { dropdownValue } = useDropdown();

    const cssVariables: CSSPropertiesWithVars = {
        '--max-height': `${maxHeight}px`,
    };

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    console.log('맥스', maxHeight);

    return (
        <Dropdown.Content className={combinedStyle} style={{ ...cssVariables }}>
            {children}
        </Dropdown.Content>
    );
};

export default Content;
