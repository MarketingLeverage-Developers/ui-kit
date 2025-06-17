import React, { useContext } from 'react';

export type RadioStyleContextType = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'gray' | 'red' | 'blue';
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

export default RadioStyleContext;
