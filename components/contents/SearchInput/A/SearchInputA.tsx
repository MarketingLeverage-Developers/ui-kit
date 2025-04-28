import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';
import Image from '@/ui-kit/components/contents/Image/Image';
import MagnifyImage from '@/ui-kit/assets/images/magnify.png';

type SearchInputAProps = InputHTMLAttributes<HTMLInputElement> & { buttonColor?: HexColor; onButtonClick?: () => void };

const SearchInputA = ({ buttonColor = '#E88731', onButtonClick, ...props }: SearchInputAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--button-color': buttonColor,
    };

    return (
        <div className={styles.SearchInputA} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button onClick={onButtonClick}>
                <Image image={MagnifyImage.src} width={30} height={30} />
            </button>
        </div>
    );
};

export default SearchInputA;
