import React, { useContext, ReactNode } from 'react';
import { HexColor } from '@/ui-kit/src/types';

export type RadioStyleContextType = {
    size?: 'sm' | 'md' | 'lg';
    color?: HexColor;
    variant?: 'solid' | 'outline' | 'ghost';
    disabled?: boolean;
    fullWidth?: boolean;
};

const RadioStyleContext = React.createContext<RadioStyleContextType | undefined>(undefined);

export const useRadioStyleContext = () => {
    const context = useContext(RadioStyleContext);
    if (!context) {
        throw new Error('useRadioStyleContext must be used within a RadioStyleContext.Provider');
    }
    return context;
};

// ✅ 여기가 핵심: 컴포넌트처럼 쓸 수 있도록 래핑
type RadioStyleProviderProps = RadioStyleContextType & {
    children: ReactNode;
};

export const RadioStyleContextProvider = ({ children, ...style }: RadioStyleProviderProps) => {
    return <RadioStyleContext.Provider value={style}>{children}</RadioStyleContext.Provider>;
};

// ✅ 이렇게도 쓰고 싶다면 export default로 설정
export default RadioStyleContextProvider;
