import React from 'react';
import styles from './BorderBox.module.scss';
import BoxA from '../Box/A/BoxA';

type BorderBoxProps = React.ComponentProps<typeof BoxA>;

const BorderBox = ({ ...props }: BorderBoxProps) => {
    return <BoxA {...props} className={styles.BorderBox}></BoxA>;
};

export default BorderBox;
