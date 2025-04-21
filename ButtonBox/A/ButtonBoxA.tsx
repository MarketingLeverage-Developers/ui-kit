import Box from '@/ui-kit/Box/Box';
import Flex from '@/ui-kit/Flex/Flex';
import React from 'react';
import Item from './Item/Item';
import styles from './ButtonBoxA.module.scss';

type ButtonBoxA = {
    children: React.ReactNode;
};

const ButtonBoxA = ({ children }: ButtonBoxA) => {
    return (
        <Box paddingY={50} paddingX={60} backgroundColor="#F9F9F9">
            <Flex gap={50} justify="start" wrap="wrap" className={styles.ButtonBoxA}>
                {children}
            </Flex>
        </Box>
    );
};

export default ButtonBoxA;

ButtonBoxA.Item = Item;
