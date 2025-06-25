import React, { useContext, ReactNode } from 'react';
import { BoxSize, ContentSize, FontSize, HexColor, PaddingSize, SpaceSize } from '@/ui-kit/src/types';

export type TabWrapperStyle = {
    bgColor?: HexColor;
    borderColor?: HexColor;
    width?: BoxSize | string;
    gap?: SpaceSize;
};

export type TabItemStyle = {
    color?: HexColor;
    fontSize?: FontSize;
    bgColor?: HexColor;
    activeBgColor?: HexColor;
    borderColor?: HexColor;
    disabled?: boolean;
    padding?: PaddingSize;
    width?: BoxSize | string;
    height?: BoxSize | string;
};

export type TabStyleContextType = {
    size?: ContentSize;
    wrapperStyle?: TabWrapperStyle;
    itemStyle?: TabItemStyle;
};

const TabStyleContext = React.createContext<TabStyleContextType | undefined>(undefined);

export const useTabStyleContext = () => {
    const context = useContext(TabStyleContext);
    if (!context) {
        throw new Error('useTabStyleContext must be used within a TabStyleContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type TabStyleProviderProps = TabStyleContextType & {
    children: ReactNode;
};

export const TabStyleContextProvider = ({ children, ...style }: TabStyleProviderProps) => {
    return <TabStyleContext.Provider value={style}>{children}</TabStyleContext.Provider>;
};

// ✅ 이렇게도 쓰고 싶다면 export default로 설정
export default TabStyleContextProvider;
