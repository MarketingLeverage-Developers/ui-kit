import React from 'react';
import styles from './BorderBox.module.scss';
import Box from '../../layouts/Box/Box';

type BorderBoxProps = React.ComponentProps<typeof Box>;

const BorderBox = ({ ...props }: BorderBoxProps) => {
    return <Box {...props} className={styles.BorderBox}></Box>;
};

export default BorderBox;
