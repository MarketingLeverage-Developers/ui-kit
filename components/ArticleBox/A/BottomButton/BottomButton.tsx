import ButtonA from '@/ui-kit/components/Button/A/ButtonA';
import React from 'react';
import styles from './BottomButton.module.scss';

type BottomButtonProps = React.ComponentProps<typeof ButtonA> & {
    children: React.ReactNode;
};

const BottomButton = ({ children, ...props }: BottomButtonProps) => {
    return (
        <ButtonA
            {...props}
            className={styles.BottomButton}
            style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            }}
        >
            {children}
        </ButtonA>
    );
};

export default BottomButton;
