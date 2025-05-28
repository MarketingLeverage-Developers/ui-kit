export const setCookie = (name: string, value: string) => {
    const date = new Date();
    date.setHours(23, 59, 59, 999); // 오늘 자정까지 유효
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

export const getCookie = (name: string) => {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : null;
};
