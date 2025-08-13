import React, { useContext, ReactNode } from 'react';
import { BoxSize, ContentSize, FontSize, HexColor, PaddingSize, SpaceSize } from '@/ui-kit/src/types';

export type TabWrapperStyle = {
    bgColor?: HexColor;
    borderColor?: HexColor;
    width?: BoxSize | string | number;
    gap?: SpaceSize | number;
    padding?: PaddingSize;
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

export type TabQContextType = {
    size?: ContentSize;
    s?: boolean;
    wrapperStyle?: TabWrapperStyle;
    itemStyle?: TabItemStyle;
    full?: boolean;
};

const TabQContext = React.createContext<TabQContextType | undefined>(undefined);

export const useTabQContext = () => {
    const context = useContext(TabQContext);
    if (!context) {
        throw new Error('useTabQContext must be used within a TabQContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type TabQProviderProps = TabQContextType & {
    children: ReactNode;
};

export const TabQContextProvider = ({ children, ...style }: TabQProviderProps) => {
    return <TabQContext.Provider value={style}>{children}</TabQContext.Provider>;
};

// ✅ 이렇게도 쓰고 싶다면 export default로 설정
export default TabQContextProvider;
