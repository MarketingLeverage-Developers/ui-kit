'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import React from 'react';
import styles from './contactButtonA.module.scss';

type ContactButtonAProps = {
    bgColor?: string;
    icon?: React.ReactNode;
    iconColor?: HexColor;
    content?: React.ReactNode;
    borderColor?: HexColor;
    borderWeight?: number;
    boxShadow?: string;
};

const ContactButtonA = ({
    icon,
    boxShadow,
    bgColor = '#363636CC',
    iconColor = '#fff',
    content,
    borderColor,
    borderWeight,
}: ContactButtonAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--box-shadow': boxShadow,
        '--bgColor': bgColor,
        '--borderColor': borderColor,
        '--borderWeight': `${borderWeight}px`,
    };

    return (
        <div className={styles.container} style={cssVariables}>
            <Flex
                width={70}
                height={70}
                justify="center"
                align="center"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        window.location.hash = '#contact';
                    }
                }}
            >
                {content || (
                    <Text color={iconColor} size={35}>
                        {icon}
                    </Text>
                )}
            </Flex>
        </div>
    );
};
export default ContactButtonA;
