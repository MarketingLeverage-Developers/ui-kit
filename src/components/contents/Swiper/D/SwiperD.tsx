// SwiperD.tsx
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SwiperD.module.scss';
import type { Swiper as SwiperDore } from 'swiper';

type SwiperDProps = {
    children: React.ReactNode;
    slidesPerView?: number;
    /** 슬라이드를 초기 위치(0)로 리셋할 때 사용하는 trigger 값 */
    resetTrigger?: any;
};

const SwiperD = ({ slidesPerView = 1, children, resetTrigger }: SwiperDProps) => {
    const swiperRef = useRef<SwiperDore | null>(null);

    // callback ref 패턴: 실제 DOM element가 할당될 때 setPrevEl/setNextEl이 호출됨

    // 현재 활성 슬라이드 인덱스 상태 (1-based)
    const [current, setCurrent] = useState(1);
    // 전체 슬라이드 개수: children 개수
    const total = React.Children.count(children);

    // resetTrigger가 바뀔 때마다 슬라이드를 첫 번째로 이동
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(0);
            setCurrent(1);
        }
    }, [resetTrigger]);

    return (
        <div className={styles.Container}>
            <Swiper
                className={styles.SwiperB}
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper: SwiperDore) => {
                    swiperRef.current = swiper;
                    setCurrent(swiper.realIndex + 1);
                }}
                onSlideChange={(swiper: SwiperDore) => {
                    setCurrent(swiper.realIndex + 1);
                }}
            >
                {React.Children.map(children, (child, idx) => (
                    <SwiperSlide className={styles.slideWrap} key={idx}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperD;
