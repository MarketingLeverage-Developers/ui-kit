'use client';
import React, { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SwiperA.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import classNames from 'classnames';

type SwiperAProps = {
    children: React.ReactNode;
    slidesPerView?: number;
    prevLocation?: number;
};

const SwiperA = ({ slidesPerView = 1, children }: SwiperAProps) => {
    // Swiper 인스턴스를 보관할 ref
    const swiperRef = useRef<any>(null);

    const prevClassName = classNames(styles.Button, styles.Prev);
    const nextClassName = classNames(styles.Button, styles.Next);

    return (
        <div className={styles.Wrapper}>
            <Swiper
                className={styles.SwiperA}
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

            <div className={prevClassName} onClick={() => swiperRef.current?.slidePrev()}>
                <MdKeyboardArrowLeft className={styles.Icon} />
            </div>
            <div className={nextClassName} onClick={() => swiperRef.current?.slideNext()}>
                <MdKeyboardArrowRight className={styles.Icon} />
            </div>
        </div>
    );
};

export default SwiperA;

// const Button = () => {

//     return <div className>

//     </div>

// }
