import React from 'react';
import styles from './barW.module.scss';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import { BoxSize } from '@/ui-kit/src/types';

type BarWProps = {
    /**
     * `true`면 숫자 타입 `iconWidth`를 px 단위 문자열로 변환하여 전달,
     * `false`면 `BoxSize` 타입으로 전달
     */
    s?: boolean;
    iconWidth?: BoxSize | number;
    icon: string;
    content?: React.ReactNode;
    style?: React.CSSProperties;
};

const BarW: React.FC<BarWProps> = ({ s = false, style, iconWidth, icon, content, ...props }) => {
    // s가 true일 때 숫자는 '${px}' 문자열로, false일 때는 BoxSize로 취급
    const widthValue: string | BoxSize | undefined = s
        ? typeof iconWidth === 'number'
            ? `${iconWidth}px`
            : iconWidth
        : (iconWidth as BoxSize | undefined);

    return (
        <div className={styles.container} style={style}>
            <Image width={widthValue} image={icon} />
            <div className={styles.flex}>{content}</div>
        </div>
    );
};

export default BarW;
