'use client';
import React, { useEffect, useState } from 'react';
import styles from './PopupA.module.scss';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { getCookie, setCookie } from '@/utils/cokkies';

export interface PopupAProps {
    top?: number;
    MobileTop?: number;
    left?: number;
    imageSrc: string;
    altText?: string;
    popName: string;
    width?: BoxSize;
    height?: BoxSize;
}

const PopupA: React.FC<PopupAProps> = ({
    width = 350,
    height = 350,
    popName,
    MobileTop = 50,
    top,
    left,
    imageSrc,
    altText = '팝업 배너',
}) => {
    const [bannerOpen, setBannerOpen] = useState(false);

    useEffect(() => {
        if (!getCookie(popName)) setBannerOpen(true);
    }, []);

    const closeToday = () => {
        const confirmed = window.confirm('해당 팝업은 오늘 하루 동안 표시되지 않습니다.\n계속하시겠습니까?');
        if (confirmed) {
            setCookie(popName, 'true');
            setBannerOpen(false);
        }
    };

    const cssVariables: CSSPropertiesWithVars = {
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--top--mo': `${MobileTop}px`,
        '--top': `${top}px`,
        '--left': `${left}px`,
    };

    const handleScrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        bannerOpen && (
            <div className={styles.PopUpItem} style={{ ...cssVariables }}>
                <img src={imageSrc} loading="lazy" onClick={handleScrollToContact} alt={altText} />
                <div className={styles.ButtonWrapper}>
                    <div onClick={closeToday}>오늘 하루 열지 않기</div>
                    <div onClick={() => setBannerOpen(false)}>닫기</div>
                </div>
            </div>
        )
    );
};

export default PopupA;
