import React from 'react';
import styles from './scrollHintB.module.scss';
import type { StaticImageData } from 'next/image';

interface MouseScrollProps {
    icon?: StaticImageData;
}

export default function ScrollHintB({ icon }: MouseScrollProps) {
    return (
        <div className={styles.container}>
            <div className={styles.mouse}>
                <div className={styles.wheel}>{icon && <img src={icon.src} alt="Scroll icon" />}</div>
                <p>Scroll</p>
            </div>
        </div>
    );
}
