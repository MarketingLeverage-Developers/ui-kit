// BasicSwiper.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BasicSwiper.module.scss';
import Box from '@/ui-kit/components/layouts/Box/Box';
import ButtonT from '../Button/T/ButtonT';
import ButtonQ from '../Button/Q/ButtonQ';

type BasicSwiperProps = {
    children: React.ReactNode;
    slidesPerView?: number;
};

const BasicSwiper = ({ slidesPerView = 1, children }: BasicSwiperProps) => {
    const prevRef = useRef<HTMLSpanElement>(null);
    const nextRef = useRef<HTMLSpanElement>(null);

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

            <Box padding={{ y: 15 }}>
                <span ref={prevRef}>
                    <ButtonT size="lg" color="#A6A6A6"></ButtonT>
                </span>
                <span ref={nextRef}>
                    <ButtonQ size="lg" color="#417EF0"></ButtonQ>
                </span>
            </Box>
        </>
    );
};

export default BasicSwiper;
