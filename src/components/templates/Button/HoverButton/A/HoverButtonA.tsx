// src/components/contents/HoverButtonA/HoverButtonA.tsx
import React, { useState } from 'react';
import styles from './HoverButtonA.module.scss';

export interface HoverButtonAProps {
    Icon: string;
    HoverIcon: string;
    alt?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const HoverButtonA: React.FC<HoverButtonAProps> = ({ Icon, HoverIcon, alt = '', onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.BtnWrapper}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? HoverIcon : Icon} alt={alt} className={styles.Icon} />
        </div>
    );
};

export default HoverButtonA;
