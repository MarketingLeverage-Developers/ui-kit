// src/ui-kit/ThemeProvider.tsx
import React, { ReactNode } from 'react';
import { Theme } from '../types';
import { defaultVariables } from '../theme/defaultVariables';
import { defaultTheme } from '../theme/defaultTheme';

interface ThemeProviderProps {
    /** 컬러 테마 덮어쓰기 */
    theme?: Partial<Theme>;
    /** CSS 변수(토큰) 덮어쓰기 */
    variables?: Partial<Record<keyof typeof defaultVariables, string>>;
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, variables = {}, children }) => {
    // 1) 컬러 병합
    const mergedTheme = { ...defaultTheme, ...theme };
    // 2) 토큰 병합
    const mergedVars = { ...defaultVariables, ...variables };

    // CSS 문자열 생성: --primaryColor:…; --font-14:…; --inner:…;
    const cssText = [
        // 컬러
        ...Object.entries(mergedTheme).map(([key, val]) => `${key}: ${val};`),
        // 토큰
        ...Object.entries(mergedVars).map(([key, val]) => `${key}: ${val};`),
    ].join('\n');

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `:root {\n${cssText}\n}` }} />
            {children}
        </>
    );
};
