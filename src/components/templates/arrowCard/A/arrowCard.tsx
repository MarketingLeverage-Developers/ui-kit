// ArrowCard.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './arrowCard.module.scss';

export interface ArrowCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    last?: boolean;
    first?: boolean;
}

const ArrowCard: React.FC<ArrowCardProps> = ({ children, className, style, last, first, ...props }) => {
    const cardClasses = classNames(
        styles.card,
        className,
        { [styles.first]: first },
        { [styles.last]: last } // ← last가 true일 때 styles.last 추가
    );
    return (
        <div {...props} className={cardClasses} style={style}>
            {children}
        </div>
    );
};

export default ArrowCard;
