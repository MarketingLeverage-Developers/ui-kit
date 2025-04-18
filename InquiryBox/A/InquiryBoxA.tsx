import BoxA from '@/ui-kit/Box/A/BoxA';
import InputA from '@/ui-kit/Input/A/InputA';
import Flex from '@/ui-kit/Flex/Flex';
import Padding from '@/ui-kit/Padding/Padding';
import Text from '@/ui-kit/Text/Text';
import React from 'react';
import ButtonA from '@/ui-kit/Button/A/ButtonA';

type InquiryBoxA = {
    children: React.ReactNode;
};

const InquiryBoxA = ({ children }: InquiryBoxA) => {
    return (
        <BoxA paddingY={50} paddingX={35} shadow>
            <Padding y={15}>
                <Text p size={38} weight={600} align="center">
                    상담신청
                </Text>
            </Padding>
            <Padding y={15}>
                <Text p size={16} align="center">
                    간단한 정보를 입력하시면 견적확인이 가능합니다.
                </Text>
            </Padding>

            <Padding y={40}>
                <Flex direction="column" gap={15}>
                    {children}
                </Flex>
            </Padding>

            <Padding y={20}>
                <ButtonA full paddingY={20} backgroundColor="#417EF0">
                    <Text size={20} weight={600} color="#FFF">
                        상담 신청하기
                    </Text>
                </ButtonA>
            </Padding>
        </BoxA>
    );
};

export default InquiryBoxA;

const FormInput = ({ ...props }) => <InputA full paddingY={20} paddingX={15} {...props} />;
const FormLabel = ({ ...props }) => (
    <Text size={18} weight={600} {...props}>
        {props.children}
    </Text>
);
