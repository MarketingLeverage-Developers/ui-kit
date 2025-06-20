export const dimensionToString = (dim?: number | string): string => {
    if (typeof dim === 'number') {
        return `${dim}px`;
    }
    return dim || 'auto';
};

export const dimensionToVariable = (dim?: number | string): string => {
    if (typeof dim === 'number') {
        return `var(--box-${dim})`;
    }
    return dim || 'auto';
};

export const dimensionToSpace = (dim?: number | string): string => {
    if (typeof dim === 'number') {
        return `var(--space-${dim})`;
    }
    return dim || 'auto';
};

export const formatNumber = (value: number | null | undefined) =>
    typeof value === 'number' && isFinite(value) ? value.toLocaleString() : '';

export const parseNumber = (value: string) => {
    const number = Number(value.replaceAll(',', ''));
    return isFinite(number) ? number : 0;
};
