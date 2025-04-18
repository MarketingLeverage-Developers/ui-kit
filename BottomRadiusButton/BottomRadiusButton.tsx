import React from 'react';
import Button from '../Button/Button';
import styles from './BottomRadiusButton.module.scss';

type BottomRadiusButton = React.ComponentProps<typeof Button>;

const BottomRadiusButton = ({ ...props }: BottomRadiusButton) => {
    return <Button {...props} className={styles.BottomRadiusButton} />;
};

export default BottomRadiusButton;
