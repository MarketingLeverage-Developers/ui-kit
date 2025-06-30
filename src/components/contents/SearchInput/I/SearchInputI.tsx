import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputI.module.scss';
import { BoxSize, CSSPropertiesWithVars, PaddingSize } from '@/ui-kit/src/types';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString } from '@/ui-kit/src/utils';

type SearchInputIProps = InputHTMLAttributes<HTMLInputElement> & {
    onButtonClick?: () => void;
    width?: BoxSize | string;
    height?: BoxSize | string;
    s?: boolean;
    padding?: PaddingSize;
};

const SearchInputI = ({ width, height, color, s, onButtonClick, ...props }: SearchInputIProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
        '--padding': s ? spacingToString(props.padding) : spacingToSpace(props.padding),
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
