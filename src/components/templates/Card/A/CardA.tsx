import React from 'react';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import { BoxSize, FontSize, HexColor } from '@/ui-kit/src/types';

export interface CardAProps extends React.ComponentProps<typeof Box> {
    title?: string;
    content?: string;
    radius?: number;
    color?: HexColor;
    icon: string;
    titleSize?: FontSize;
    contentSize?: FontSize;
    width?: BoxSize;
    height?: BoxSize;
    borderWeight?: number;
    borderColor?: HexColor;
    backgroundColor?: HexColor | 'inherit' | 'transparent' | 'none';
}

const CardA: React.FC<CardAProps> = ({
    color = '#000',
    title,
    content,
    icon,
    radius = 0,
    titleSize = 22,
    contentSize = 40,
    width = 250,
    height = 250,
    borderWeight = 0,
    borderColor,
    backgroundColor = 'inherit',
    ...boxProps
}) => (
    <Box
        radius={radius}
        width={width}
        height={height}
        borderWeight={borderWeight}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        padding={20}
        {...boxProps}
    >
        <Flex height="100%" direction="column" gap={15} justify="space-between">
            <Flex direction="column" gap={15}>
                <Text color={color} size={titleSize} weight={500} line={1}>
                    {title}
                </Text>
                <Text color={color} size={contentSize} weight={600}>
                    {content}
                </Text>
            </Flex>
            <Flex justify="end">
                <Image image={icon} width={45} height={45} />
            </Flex>
        </Flex>
    </Box>
);

export default CardA;
