// SwiperC.tsx
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SwiperC.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import classNames from 'classnames';
import type { Swiper as SwiperCore } from 'swiper';

type SwiperCProps = {
    children: React.ReactNode;
    slidesPerView?: number;
    /** 슬라이드를 초기 위치(0)로 리셋할 때 사용하는 trigger 값 */
    resetTrigger?: any;
};

const SwiperC = ({ slidesPerView = 1, children, resetTrigger }: SwiperCProps) => {
    const swiperRef = useRef<SwiperCore | null>(null);

    // callback ref 패턴: 실제 DOM element가 할당될 때 setPrevEl/setNextEl이 호출됨
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    // 현재 활성 슬라이드 인덱스 상태 (1-based)
    const [current, setCurrent] = useState(1);
    // 전체 슬라이드 개수: children 개수
    const total = React.Children.count(children);

    const prevClassName = classNames(styles.Button, styles.Prev);
    const nextClassName = classNames(styles.Button, styles.Next);

    // children 개수가 바뀔 때 current 초기화
    useEffect(() => {
        if (swiperRef.current) {
            const idx = swiperRef.current.realIndex ?? swiperRef.current.activeIndex ?? 0;
            setCurrent(idx + 1);
        } else {
            setCurrent(1);
        }
    }, [total]);

    // resetTrigger가 바뀔 때마다 슬라이드를 첫 번째로 이동
    useEffect(() => {
        if (swiperRef.current) {
            // loop 모드일 때는 slideToLoop(0), 아닐 때는 slideTo(0)
            // 여기서는 loop=true 상태이므로 slideToLoop 사용
            swiperRef.current.slideToLoop(0);
            // current 상태도 동기화
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
                navigation={{
                    prevEl: prevEl,
                    nextEl: nextEl,
                }}
                onBeforeInit={(swiper: SwiperCore) => {
                    if (prevEl && nextEl) {
                        // @ts-ignore
                        swiper.params.navigation = {
                            prevEl,
                            nextEl,
                        };
                    }
                }}
                onSwiper={(swiper: SwiperCore) => {
                    swiperRef.current = swiper;
                    setCurrent(swiper.realIndex + 1);
                    setTimeout(() => {
                        if (swiper.navigation && prevEl && nextEl) {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }, 0);
                }}
                onSlideChange={(swiper: SwiperCore) => {
                    setCurrent(swiper.realIndex + 1);
                }}
            >
                {React.Children.map(children, (child, idx) => (
                    <SwiperSlide className={styles.slideWrap} key={idx}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* custom 버튼: callback ref로 DOM element를 state에 설정 */}
            <div className={styles.ButtonWrapper}>
                <div
                    ref={(el) => {
                        if (el) setPrevEl(el);
                    }}
                    className={prevClassName}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <MdKeyboardArrowLeft className={styles.Icon} />
                </div>
                <div
                    ref={(el) => {
                        if (el) setNextEl(el);
                    }}
                    className={nextClassName}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <MdKeyboardArrowRight className={styles.Icon} />
                </div>
            </div>
            <div className={styles.PageWrapper}>
                <div className={styles.Page}>
                    <span>{current}</span> / <span>{total}</span>
                </div>
            </div>
        </div>
    );
};

export default SwiperC;
