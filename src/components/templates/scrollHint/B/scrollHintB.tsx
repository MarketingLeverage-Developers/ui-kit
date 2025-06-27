import React from 'react';
import styles from './scrollHintB.module.scss';

interface MouseScrollProps {
    icon?: string;
}

export default function ScrollHintB({ icon }: MouseScrollProps) {
    return (
        <div className={styles.container}>
            <div className={styles.mouse}>
                <div className={styles.wheel}>{icon && <img src={icon} alt="Scroll icon" />}</div>
                <p>Scroll</p>
            </div>
        </div>
    );
}
