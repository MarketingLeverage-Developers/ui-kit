import React from 'react';
import styles from './BottomRadiusButton.module.scss';
import ButtonA from '../Button/A/ButtonA';

type BottomRadiusButton = React.ComponentProps<typeof ButtonA>;

const BottomRadiusButton = ({ ...props }: BottomRadiusButton) => {
    return <ButtonA {...props} className={styles.BottomRadiusButton} />;
};

export default BottomRadiusButton;
