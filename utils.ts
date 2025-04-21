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
