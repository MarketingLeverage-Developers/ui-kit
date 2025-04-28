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

export const formatNumberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatNumberAsManRounded = (num: number) => {
    return `${(num / 10000).toFixed(1)}만`;
};
