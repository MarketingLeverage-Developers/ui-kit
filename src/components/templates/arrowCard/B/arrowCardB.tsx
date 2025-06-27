// BottomNotchCard.tsx
import React from 'react';
import classNames from 'classnames';
import styles from './arrowCardB.module.scss';

export interface arrowCardBProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    first?: boolean;
    last?: boolean;
}

const ArrowCardB: React.FC<arrowCardBProps> = ({ children, className, style, first, last, ...props }) => {
    const cardClasses = classNames(styles.card, className, { [styles.first]: first }, { [styles.last]: last });
    return (
        <div {...props} className={cardClasses} style={style}>
            {children}
        </div>
    );
};

export default ArrowCardB;
