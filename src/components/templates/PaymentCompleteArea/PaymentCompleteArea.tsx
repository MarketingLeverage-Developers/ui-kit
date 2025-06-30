import React from 'react';
import styles from './PaymentCompleteArea.module.scss';
import { FaRegCheckCircle } from 'react-icons/fa';
type PaymentCompleteAreaProps = {
    amount: number;
    payment: string;
    date: Date;
};
const PaymentCompleteArea = ({ amount, payment, date = new Date() }: PaymentCompleteAreaProps) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${date.getFullYear()}.${month}.${day} ${hour}:${minute}`;

    return (
        <div className={styles.Area}>
            <FaRegCheckCircle className={styles.Icon} />
            <div className={styles.Head}>결제가 완료되었습니다.</div>
            <div className={styles.Sub}>
                총{' '}
                <span>
                    {amount?.toLocaleString()}원 · {payment}
                </span>
                <p>{formattedDate}</p>
            </div>
        </div>
    );
};

export default PaymentCompleteArea;
