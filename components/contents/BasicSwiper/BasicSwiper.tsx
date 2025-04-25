// BasicSwiper.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BasicSwiper.module.scss';
import Circle from '@/ui-kit//Circle/Circle';
import Padding from '@/ui-kit/components/layouts/Padding/Padding';
import ButtonD from '../Button/D/ButtonD';

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

            <Padding y={15}>
                <span ref={prevRef}>
                    <ButtonD paddingX={30} paddingY={30} variant="outlined" backgroundColor="#A6A6A6"></ButtonD>
                </span>
                <span ref={nextRef}>
                    <ButtonD paddingX={30} paddingY={30} backgroundColor="#417EF0"></ButtonD>
                </span>
            </Padding>
        </>
    );
};

export default BasicSwiper;
