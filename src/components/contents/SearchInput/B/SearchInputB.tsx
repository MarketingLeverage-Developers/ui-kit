import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputB.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import Image from '../../Image/Image';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

type SearchInputBProps = InputHTMLAttributes<HTMLInputElement> & { buttonColor?: HexColor; onButtonClick?: () => void };

const SearchInputB = ({ color, onButtonClick, ...props }: SearchInputBProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <div className={styles.SearchInputB} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button onClick={onButtonClick}>
                <HiMiniMagnifyingGlass className={styles.Icon} />
            </button>
        </div>
    );
};

export default SearchInputB;
