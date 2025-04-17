import React from 'react';
import Box from '../Box/Box';
import styles from './BorderBox.module.scss';

type BorderBoxProps = React.ComponentProps<typeof Box>;

const BorderBox = ({ ...props }: BorderBoxProps) => {
    return <Box {...props} className={styles.BorderBox}></Box>;
};

export default BorderBox;
