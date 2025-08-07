'use client';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Background from '@/ui-kit/src/components/layouts/Background/Background';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import { BoxSize, HexColor } from '@/ui-kit/src/types';
import { useRouter } from 'next/navigation';

export type MenuItem = {
    label: string;
    id: string;
};

// 2) HeaderA가 받을 props
export interface HeaderAProps {
    logo: string;
    logoWidth?: BoxSize;
    /** 배경색 (Background 컴포넌트에 전달) */
    backgroundColor?: HexColor;
    /** 최대 너비(px) (MaxWidth 컴포넌트에 전달) */
    maxWidth?: number;
    /** 상단 네비게이션 메뉴 목록 */
    menuItems: MenuItem[];
    /** 오른쪽 끝에 들어갈 커스텀 요소 (버튼, 전화번호, 아이콘 등) */
    endContent?: React.ReactNode;
}

const HeaderA = ({
    backgroundColor = '#fff',
    maxWidth = 1680,
    menuItems,
    endContent,
    logo,
    logoWidth,
}: HeaderAProps) => {
    const router = useRouter();
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // 섹션의 최상단 정렬
            });
        }
    };
    return (
        <Background color={backgroundColor}>
            <Box style={{ borderBottom: ' 1px solid #E2E2E2' }}>
                <MaxWidth maxWidth={maxWidth} style={{ padding: '0 20px' }}>
                    <Flex height="88px" align="center" justify="space-between">
                        <Image
                            image={logo}
                            width={logoWidth}
                            onClick={() => router.push('/')}
                            style={{ cursor: 'pointer' }}
                        />
                        <Item desktop flex={1}>
                            <Flex align="center" justify="center" gap={60}>
                                {menuItems?.map((el, idx) => (
                                    <Text
                                        size={22}
                                        weight={600}
                                        key={idx}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleClick(el.id)}
                                    >
                                        {el.label}
                                    </Text>
                                ))}
                            </Flex>
                        </Item>
                        {endContent && <Box style={{ cursor: 'pointer' }}>{endContent}</Box>}
                    </Flex>
                </MaxWidth>
            </Box>
        </Background>
    );
};
export default HeaderA;
