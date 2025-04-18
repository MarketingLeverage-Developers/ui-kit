import ButtonA from '@/ui-kit/Button/A/ButtonA';
import React from 'react';
import styles from './BottomButton.module.scss';

type BottomButtonProps = React.ComponentProps<typeof ButtonA> & {
    children: React.ReactNode;
};

const BottomButton = ({ children, ...props }: BottomButtonProps) => {
    return (
        <ButtonA {...props} className={styles.BottomButton}>
            {children}
        </ButtonA>
    );
};

export default BottomButton;
