import { useState } from 'react';
import styles from './RotateButtonA.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
export interface HoverButtonAProps {
    Icon: string;
    alt?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    RotateBackgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
    borderWeight?: number;
    borderColor?: HexColor;
    RotateBorderColor?: HexColor;
    boxShadow?: string;
}

const RotateButtonA: React.FC<HoverButtonAProps> = ({
    boxShadow,
    Icon,
    RotateBackgroundColor = '#ffffff',
    backgroundColor = '#ffffff',
    borderWeight = 0,
    borderColor = '#929292',
    RotateBorderColor = '#929292',
    alt = '',
    onClick,
}) => {
    const [rotate, setRotate] = useState(false);
    const cssVariables: CSSPropertiesWithVars = {
        '--backgroundColor': rotate ? `${RotateBackgroundColor}` : `${backgroundColor}`,
        '--border-color': rotate ? `${RotateBorderColor}` : `${borderColor}`,
        '--border-weight': `${borderWeight}px`,
        '--box-shadow': boxShadow,
    };

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        // 1) 내부 상태
        setRotate((prev) => !prev);

        // 2) 부모가 전달한 onClick
        onClick?.(e);
    };

    return (
        <div className={styles.BtnWrapper} onClick={handleClick} style={{ ...cssVariables }}>
            <img
                style={{
                    transition: 'transform 0.3s ease',
                    transform: rotate ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
                src={Icon}
                alt={alt}
                className={styles.Icon}
            />
        </div>
    );
};
export default RotateButtonA;
