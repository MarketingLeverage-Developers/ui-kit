import Box from '@/ui-kit/components/contents/Box/Box';
import React from 'react';
import styles from './MoveBoxA.module.scss';

type MoveBoxA = React.ComponentProps<typeof Box> & {
    absolute?: React.ReactNode;
};

const MoveBoxA = ({ absolute, ...props }: MoveBoxA) => {
    return (
        <Box {...props} className={styles.MoveBoxA} paddingY={40} paddingX={30}>
            {props.children}
            {absolute}
        </Box>
    );
};

export default MoveBoxA;
