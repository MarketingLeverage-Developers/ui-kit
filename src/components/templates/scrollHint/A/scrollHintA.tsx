import React from 'react';
import styles from './ScrollHintA.module.scss';

export default function ScrollHintA() {
    return (
        <div className={styles.container}>
            <div className={styles.mouse}>
                <div className={styles.wheel} />
            </div>
        </div>
    );
}
