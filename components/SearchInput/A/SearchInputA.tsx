import React, { InputHTMLAttributes } from 'react';
import styles from './SearchInputA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';
import Image from '@/ui-kit/components/Image/Image';
import MagnifyImage from '@/ui-kit/assets/images/magnify.png';

type SearchInputAProps = InputHTMLAttributes<HTMLInputElement> & { buttonColor?: HexColor };

const SearchInputA = ({ buttonColor = '#E88731', ...props }: SearchInputAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--button-color': buttonColor,
    };

    return (
        <div className={styles.SearchInputA} style={{ ...props.style, ...cssVariables }}>
            <input {...props} />
            <button>
                <Image image={MagnifyImage.src} width={30} height={30} />
            </button>
        </div>
    );
};

export default SearchInputA;
