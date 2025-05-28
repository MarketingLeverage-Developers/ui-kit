import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import { RxMagnifyingGlass } from 'react-icons/rx';

type SearchInputAProps = InputHTMLAttributes<HTMLInputElement> & { onButtonClick?: () => void };

const SearchInputA = ({ color, onButtonClick, ...props }: SearchInputAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <div className={styles.SearchInputA} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button onClick={onButtonClick}>
                <RxMagnifyingGlass className={styles.Icon} />
            </button>
        </div>
    );
};

export default SearchInputA;
