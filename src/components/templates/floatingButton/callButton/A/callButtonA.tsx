'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import styles from './callButtonA.module.scss';
import Item from '@/ui-kit/src/components/layouts/Item/Item';

type LinkButtonAProps = {
    /** 전화번호 (예: "010-1234-5678" 또는 "+82 10-1234-5678") */
    phone?: string;
    /** 클릭 전에 확인 모달을 띄울지 여부 */
    confirmBeforeCall?: boolean;

    /** 기존 외부 링크도 지원 (phone이 우선) */
    link?: string;

    bgColor?: string;
    iconColor?: HexColor;
    Content?: React.ReactNode;
    borderColor?: HexColor;
    borderWeight?: number;
    boxShadow?: string;
    Icon?: React.ReactNode;
};

const LinkButtonA = ({
    phone,
    confirmBeforeCall = false,
    link,
    boxShadow,
    bgColor = '#363636CC',
    iconColor = '#fff',
    Content,
    borderColor,
    borderWeight,
    Icon,
}: LinkButtonAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--box-shadow': boxShadow,
        '--bgColor': bgColor,
        '--borderColor': borderColor,
        '--borderWeight': borderWeight ? `${borderWeight}px` : undefined,
    };

    // tel: href 생성
    const telHref = React.useMemo(() => {
        if (!phone) return undefined;
        const trimmed = phone.trim();
        const sanitized = trimmed.startsWith('+')
            ? '+' + trimmed.slice(1).replace(/\D/g, '')
            : trimmed.replace(/\D/g, '');
        return `tel:${sanitized}`;
    }, [phone]);

    const contentNode = Content || (
        <Text color={iconColor} size={35}>
            {Icon ?? <FaPhone />}
        </Text>
    );

    // 클릭 전 확인
    const handleClick: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement> = (e) => {
        if (confirmBeforeCall && phone) {
            const ok = window.confirm(`전화 걸기: ${phone}`);
            if (!ok) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };

    return (
        <div className={styles.container} style={cssVariables}>
            {telHref ? (
                <a href={telHref} onClick={handleClick} aria-label={`전화 걸기 ${phone}`} className={styles.blockLink}>
                    <Item desktop>
                        <Flex width={70} height={70} justify="center" align="center" style={{ cursor: 'pointer' }}>
                            {contentNode}
                        </Flex>
                    </Item>
                    <Item mobile>
                        <Flex
                            width={'44px'}
                            height={'44px'}
                            justify="center"
                            align="center"
                            style={{ cursor: 'pointer' }}
                        >
                            {contentNode}
                        </Flex>
                    </Item>
                </a>
            ) : (
                <div
                    onClick={() => link && window.open(link, '_blank', 'noopener,noreferrer')}
                    role="button"
                    tabIndex={0}
                    className={styles.blockLink}
                    onKeyDown={(e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && link) {
                            window.open(link, '_blank', 'noopener,noreferrer');
                        }
                    }}
                    aria-label={link ? '외부 링크 열기' : '버튼'}
                >
                    <Item desktop>
                        <Flex width={70} height={70} justify="center" align="center" style={{ cursor: 'pointer' }}>
                            {contentNode}
                        </Flex>
                    </Item>
                    <Item mobile>
                        <Flex
                            width={'44px'}
                            height={'44px'}
                            justify="center"
                            align="center"
                            style={{ cursor: 'pointer' }}
                        >
                            {contentNode}
                        </Flex>
                    </Item>
                </div>
            )}
        </div>
    );
};

export default LinkButtonA;
