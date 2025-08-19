// AnimationA.tsx
'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './AnimationA.module.scss';

type AnimationAProps = {
    children: React.ReactNode;
};

const AnimationA = ({ children }: AnimationAProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5, // 살짝만 보여도 트리거
                rootMargin: '0px 0px -10% 0px', // 뷰포트 끝나기 전에 미리 발동
            }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`${styles.AnimationA} ${inView ? styles.Visible : ''}`}>
            {children}
        </div>
    );
};

export default AnimationA;
