import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import animationData from 'assets/etc/payment_loading.json';
import React from 'react';
import Lottie from 'react-lottie';
import styles from './PaymentLoadingArea.module.scss';

const PaymentLoadingArea = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={styles.Area}>
            <Lottie style={{ width: 'var(--box-100)', height: 'var(--box-100)' }} options={defaultOptions} />
            <div className={styles.Head}>결제가 진행 중입니다.</div>
            <div className={styles.Sub}>
                결제 완료까지 다소 시간이 걸릴 수 있습니다.
                <br /> 안전한 결제를 위해 잠시만 기다려 주세요!
            </div>
        </div>
    );
};

export default PaymentLoadingArea;
