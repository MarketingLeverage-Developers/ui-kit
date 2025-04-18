// BasicSwiper.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BasicSwiper.module.scss';
import Circle from '@/ui-kit//Circle/Circle';
import Padding from '@/ui-kit/Padding/Padding';

type BasicSwiperProps = {
    children: React.ReactNode;
    slidesPerView?: number;
};

const BasicSwiper = ({ slidesPerView = 1, children }: BasicSwiperProps) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onInit={(swiper) => {
                    // Swiper가 초기화된 후에 prev, next 엘리먼트 할당 필요
                    if (swiper.params.navigation) {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
            >
                {children}
            </Swiper>

            <Padding y={15}>
                <Circle ref={prevRef} size={70}>
                    Prev
                </Circle>
                <Circle ref={nextRef} size={70} backgroundColor="#417EF0">
                    Next
                </Circle>
            </Padding>
        </>
    );
};

export default BasicSwiper;
