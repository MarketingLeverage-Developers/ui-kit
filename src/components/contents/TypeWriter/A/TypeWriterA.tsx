'use client';
import { useEffect, useState } from 'react';
import Text, { TextProps } from '@/ui-kit/src/components/contents/Text/Text';
import styles from './TypewriterA.module.scss';
import { FontSize, FontWeight } from '@/ui-kit/src/types';

type TypewriterAPhase = 'typing' | 'pausing' | 'deleting' | 'completed';

type TypewriterAProps = Omit<TextProps, 'children'> & {
    text?: string;
    speed?: number; // 타이핑 간격(ms)
    deleteSpeed?: number; // 삭제 간격(ms)
    delay?: number; // 끝까지 타이핑 후 대기(ms)
    size?: FontSize;
    color?: string;
    weight?: FontWeight;
    lineHeight?: string;
    loop?: boolean;
    s?: boolean;
    cursor?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
};

const DEFAULT_SPEED = 100;
const DEFAULT_DELETE_SPEED = 60;
const DEFAULT_DELAY = 2000;

/**
 * @example <TypewriterA text='example' size={16} weight={700} loop={true} />
 */
export default function TypeWriterA({
    text = '',
    speed = DEFAULT_SPEED,
    deleteSpeed = DEFAULT_DELETE_SPEED,
    delay = DEFAULT_DELAY,
    size,
    color,
    weight,
    lineHeight,
    s,
    loop = false,
    style,
    cursor = '_',
    ariaLive = 'polite',
    ...props
}: TypewriterAProps) {
    const [charIndex, setCharIndex] = useState(0);
    const [phase, setPhase] = useState<TypewriterAPhase>('typing');

    // 텍스트/루프 플래그가 바뀌면 처음부터 다시
    useEffect(() => {
        setCharIndex(0);
        setPhase('typing');
    }, [text, loop]);

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout> | undefined;

        switch (phase) {
            case 'typing': {
                const done = charIndex === text.length;
                if (!done) {
                    timerId = setTimeout(() => setCharIndex((n) => n + 1), speed);
                } else {
                    setPhase(loop ? 'pausing' : 'completed');
                }
                break;
            }
            case 'pausing': {
                timerId = setTimeout(() => setPhase('deleting'), delay);
                break;
            }
            case 'deleting': {
                const atStart = charIndex === 0;
                if (!atStart) {
                    timerId = setTimeout(() => setCharIndex((n) => n - 1), deleteSpeed);
                } else {
                    setPhase('typing');
                }
                break;
            }
            case 'completed':
                break;
        }

        return () => timerId && clearTimeout(timerId);
    }, [phase, charIndex, text.length, speed, deleteSpeed, delay, loop]);

    const visibleText = text.slice(0, charIndex);
    const showCursor = phase !== 'completed';

    return (
        <Text
            {...props}
            size={size}
            weight={weight}
            color={color}
            s={s}
            style={{ lineHeight, ...style }}
            aria-live={ariaLive}
            aria-atomic="true"
        >
            {visibleText}
            {showCursor && (
                <span aria-hidden className={styles.cursor}>
                    {cursor}
                </span>
            )}
        </Text>
    );
}
