import ButtonA from '@/ui-kit/components/contents/Button/A/ButtonA';
import React from 'react';
import styles from './BottomButton.module.scss';
import ButtonV from '../../../Button/V/ButtonV';

type BottomButtonProps = React.ComponentProps<typeof ButtonA> & {
    children: React.ReactNode;
};

const BottomButton = ({ children, ...props }: BottomButtonProps) => {
    return (
        <ButtonV {...props} full>
            {children}
        </ButtonV>
    );
};

export default BottomButton;
