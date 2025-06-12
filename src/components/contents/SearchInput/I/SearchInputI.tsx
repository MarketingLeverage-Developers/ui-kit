import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputI.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

type SearchInputIProps = InputHTMLAttributes<HTMLInputElement> & {
    onButtonClick?: () => void;
};

const SearchInputI = ({ color, onButtonClick, ...props }: SearchInputIProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <div className={styles.SearchInputI} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button onClick={onButtonClick}>
                <HiOutlineMagnifyingGlass className={styles.Icon} />
            </button>
        </div>
    );
};

export default SearchInputI;
