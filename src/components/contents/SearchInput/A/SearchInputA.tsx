import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import Image from '../../Image/Image';
import MagnifyImage from '../../../../assets/images/magnify.png';

type SearchInputAProps = InputHTMLAttributes<HTMLInputElement> & { buttonColor?: HexColor; onButtonClick?: () => void };

const SearchInputA = ({ color, onButtonClick, ...props }: SearchInputAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <div className={styles.SearchInputA} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button onClick={onButtonClick}>
                <Image image={MagnifyImage} width={30} height={30} />
            </button>
        </div>
    );
};

export default SearchInputA;
