import { PaddingSize, SpaceSize } from './types';

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

export const dimensionToFont = (value?: number | string): string | undefined => {
    if (typeof value === 'number') {
        return `var(--font-${value})`;
    }
    return value;
};

export const toFont = (value?: number | string): string | undefined => {
    if (typeof value === 'number') {
        return `var(--font-${value})`;
    }
    return value;
};

export const spacingToSpace = (padding: PaddingSize | number = 0): string => {
    // now padding is always number/string/object

    if (typeof padding === 'number' || typeof padding === 'string') {
        return dimensionToSpace(padding as number | SpaceSize);
    }

    // object: start with x/y defaults
    const px = padding.x != null ? dimensionToSpace(padding.x) : '0px';
    const py = padding.y != null ? dimensionToSpace(padding.y) : '0px';

    let top = py;
    let bottom = py;
    let left = px;
    let right = px;

    if (padding.t != null) top = dimensionToSpace(padding.t);
    if (padding.b != null) bottom = dimensionToSpace(padding.b);
    if (padding.l != null) left = dimensionToSpace(padding.l);
    if (padding.r != null) right = dimensionToSpace(padding.r);

    return `${top} ${right} ${bottom} ${left}`;
};

export const spacingToString = (padding: PaddingSize | number = 0): string => {
    // now padding is always number/string/object

    if (typeof padding === 'number' || typeof padding === 'string') {
        return dimensionToString(padding as number | SpaceSize);
    }

    // object: start with x/y defaults
    const px = padding.x != null ? dimensionToString(padding.x) : '0px';
    const py = padding.y != null ? dimensionToString(padding.y) : '0px';

    let top = py;
    let bottom = py;
    let left = px;
    let right = px;

    if (padding.t != null) top = dimensionToString(padding.t);
    if (padding.b != null) bottom = dimensionToString(padding.b);
    if (padding.l != null) left = dimensionToString(padding.l);
    if (padding.r != null) right = dimensionToString(padding.r);

    return `${top} ${right} ${bottom} ${left}`;
};
