import React, { useContext, ReactNode } from 'react';
import { BoxSize, ContentSize, FontSize, HexColor, PaddingSize, SpaceSize } from '@/ui-kit/src/types';

export type TabWrapperStyle = {
    bgColor?: HexColor;
    borderColor?: HexColor;
    width?: BoxSize | string | number;
    gap?: SpaceSize | number;
};

export type TabItemStyle = {
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

export type TabOContextType = {
    size?: ContentSize;
    s?: boolean;
    wrapperStyle?: TabWrapperStyle;
    itemStyle?: TabItemStyle;
};

const TabOContext = React.createContext<TabOContextType | undefined>(undefined);

export const useTabOContext = () => {
    const context = useContext(TabOContext);
    if (!context) {
        throw new Error('useTabOContext must be used within a TabOContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type TabOProviderProps = TabOContextType & {
    children: ReactNode;
};

export const TabOContextProvider = ({ children, ...style }: TabOProviderProps) => {
    return <TabOContext.Provider value={style}>{children}</TabOContext.Provider>;
};

// ✅ 이렇게도 쓰고 싶다면 export default로 설정
export default TabOContextProvider;
