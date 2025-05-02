// src/config/config.ts

import { HexColor } from '../types/types';

function parseHexColor(raw?: string): HexColor | undefined {
    if (!raw) return undefined;
    // # + 6자리(대소문자 구분 없음)
    const isValid = /^#[0-9A-Fa-f]{6}$/.test(raw);
    return isValid ? (raw as HexColor) : undefined;
}

export const config = {
    theme: {
        primaryColor: parseHexColor(process.env.NEXT_PUBLIC_PRIMARY_COLOR),
        textColor: parseHexColor(process.env.NEXT_PUBLIC_TEXT_COLOR),
    },
    server: {
        apiURL: process.env.NEXT_PUBLIC_API_URL,
        siteURL: process.env.NEXT_PUBLIC_SITE_URL,
    },
} as const;
