import BoxA from '@/ui-kit/Box/A/BoxA';
import React from 'react';
import styles from './MoveBoxA.module.scss';

type MoveBoxA = React.ComponentProps<typeof BoxA> & {
    absolute?: React.ReactNode;
};

const MoveBoxA = ({ absolute, ...props }: MoveBoxA) => {
    return (
        <BoxA {...props} className={styles.MoveBoxA} paddingY={40} paddingX={30}>
            {props.children}
            {absolute}
        </BoxA>
    );
};

export default MoveBoxA;
