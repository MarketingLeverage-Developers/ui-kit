export const dimensionToString = (dim?: number | string): string => {
    if (typeof dim === 'number') {
        return `${dim}px`;
    }
    return dim || 'auto';
};
