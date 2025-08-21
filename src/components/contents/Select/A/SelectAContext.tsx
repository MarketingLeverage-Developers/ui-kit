import { BoxSize, ContentSize, FontSize, HexColor, PaddingSize, SpaceSize } from '@/ui-kit/src/types';
import React, { ReactNode, useContext } from 'react';

export type SelectWrapperStyle = {
    bgColor?: HexColor;
    borderColor?: HexColor;
    width?: BoxSize | string | number;
    gap?: SpaceSize | number;
};

export type SelectItemStyle = {
    color?: HexColor;
    fontSize?: FontSize;
    bgColor?: HexColor;
    activeBgColor?: HexColor;
    borderColor?: HexColor;
    disabled?: boolean;
    padding?: PaddingSize;
    width?: BoxSize | string | number;
    height?: BoxSize | string | number;
};

export type SelectAContextType = {
    size?: ContentSize;
    s?: boolean;
    wrapperStyle?: SelectWrapperStyle;
    itemStyle?: SelectItemStyle;
    disabled?: boolean;
};

const SelectAContext = React.createContext<SelectAContextType | undefined>(undefined);
export const useSelectAContext = () => {
    const context = useContext(SelectAContext);
    if (!context) {
        throw new Error('useSelectAContext must be used within a SelectAContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type SelectAProviderProps = SelectAContextType & {
    children: ReactNode;
};

export const SelectAContextProvider = ({ children, ...style }: SelectAProviderProps) => {
    return <SelectAContext.Provider value={style}>{children}</SelectAContext.Provider>;
};

export default SelectAContextProvider;
