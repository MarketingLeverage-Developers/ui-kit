import Box from '@/ui-kit/components/Box/Box';
import Text from '@/ui-kit/components/Text/Text';
import React from 'react';
import styles from './Title.module.scss';

type TitleBoxProps = {
    title: string;
};

const Title = ({ title }: TitleBoxProps) => {
    return (
        <Box paddingY={25} paddingX={20} className={styles.Title} radius={0}>
            <Text size={22} weight={600}>
                {title}
            </Text>
        </Box>
    );
};

export default Title;
