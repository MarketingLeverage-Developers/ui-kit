import React, { useContext, ReactNode } from 'react';
import { BoxSize, ContentSize, FontSize, HexColor, PaddingSize, SpaceSize } from '@/ui-kit/src/types';

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

export type SelectEContextType = {
    size?: ContentSize;
    s?: boolean;
    wrapperStyle?: SelectWrapperStyle;
    itemStyle?: SelectItemStyle;
    disabled?: boolean;
};

const SelectEContext = React.createContext<SelectEContextType | undefined>(undefined);

export const useSelectEContext = () => {
    const context = useContext(SelectEContext);
    if (!context) {
        throw new Error('useSelectEContext must be used within a SelectEContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type SelectEProviderProps = SelectEContextType & {
    children: ReactNode;
};

export const SelectEContextProvider = ({ children, ...style }: SelectEProviderProps) => {
    return <SelectEContext.Provider value={style}>{children}</SelectEContext.Provider>;
};

// ✅ 이렇게도 쓰고 싶다면 export default로 설정
export default SelectEContextProvider;
