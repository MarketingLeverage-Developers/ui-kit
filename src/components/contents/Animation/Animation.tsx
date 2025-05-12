'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './Animation.module.scss';

type AnimationProps = {
    children: React.ReactNode;
};

const Animation = ({ children }: AnimationProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // 한 번만 실행하려면 disconnect
                }
            },
            { threshold: 0.15 } // 10% 보일 때 트리거
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`${styles.Animation} ${inView ? styles.Visible : ''}`}>
            {children}
        </div>
    );
};

export default Animation;
