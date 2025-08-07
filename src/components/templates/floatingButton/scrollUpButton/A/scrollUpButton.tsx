'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import styles from './scrollUpButton.module.scss';

type ScrollUpbuttonProps = {
    bgColor?: string;
    iconColor?: HexColor;
    Content?: React.ReactNode;
    borderColor?: HexColor;
    borderWeight?: number;
    boxShadow?: string;
};

const ScrollUpbutton = ({
    boxShadow,
    bgColor = '#363636CC',
    iconColor = '#fff',
    Content,
    borderColor,
    borderWeight,
}: ScrollUpbuttonProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--box-shadow': boxShadow,
        '--bgColor': bgColor,
        '--borderColor': borderColor,
        '--borderWeight': `${borderWeight}px`,
    };

    return (
        <div className={styles.container} style={cssVariables}>
            <Flex
                width={60}
                height={60}
                justify="center"
                align="center"
                style={{ cursor: 'pointer' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                {Content || (
                    <Text color={iconColor} size={30}>
                        <FaArrowUp />{' '}
                    </Text>
                )}
            </Flex>
        </div>
    );
};
export default ScrollUpbutton;
