import React from 'react';
import styles from './cardM.module.scss';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type cardMProps = {
    title?: React.ReactNode;
    content?: React.ReactNode;
    style?: React.CSSProperties;
    titleBg?: HexColor;
    contentBg?: HexColor;
};

const CardM = ({ content, title, style, titleBg = '#000', contentBg = '#fff' }: cardMProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--titleBg': titleBg,
        '--contentBg': contentBg,
    };
    return (
        <div className={styles.container} style={{ ...cssVariables, ...style }}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    );
};
export default CardM;
