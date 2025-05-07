'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { callPageView } from '@/ui-kit/services';

type ApiData = any; // 실제 데이터 타입에 맞게 수정하세요.

interface ApiCallerProps {}

export default function CallPageView({}: ApiCallerProps) {
    const searchParams = useSearchParams();
    const paramsObj: Record<string, string> = Object.fromEntries(searchParams.entries());

    useEffect(() => {
        (async () => {
            try {
                await callPageView({});
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return <div>{/* 필요에 따라 데이터를 렌더링하거나 다른 컴포넌트로 전달할 수 있습니다 */}</div>;
}
