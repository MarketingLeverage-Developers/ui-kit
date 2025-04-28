'use client';
import React, { useRef, useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Box from '@/ui-kit/components/layouts/Box/Box';
import ButtonT from '../../Button/T/ButtonT';
import ButtonQ from '../../Button/Q/ButtonQ';
import Flex from '../../../layouts/Flex/Flex';

type SwiperAProps = {
    children: React.ReactNode;
    slidesPerView?: number;
};

const SwiperA = ({ slidesPerView = 1, children }: SwiperAProps) => {
    // Swiper 인스턴스를 보관할 ref
    const swiperRef = useRef<any>(null);

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // onSwiper 콜백으로 인스턴스 저장
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                // 기존 Navigation 설정은 제거해도 됩니다.
            >
                {children}
            </Swiper>

            <Box padding={{ y: 15 }}>
                <Flex gap={15} justify="end">
                    {/* slidePrev */}
                    <ButtonT size="lg" color="#A6A6A6" onClick={() => swiperRef.current?.slidePrev()} />
                    {/* slideNext */}
                    <ButtonQ size="lg" color="#417EF0" onClick={() => swiperRef.current?.slideNext()} />
                </Flex>
            </Box>
        </>
    );
};

export default SwiperA;
