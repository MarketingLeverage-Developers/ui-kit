import Padding from '@/ui-kit/components/layouts/Padding/Padding';
import React from 'react';

type SubAreaProps = {
    children: React.ReactNode;
};

const SubArea = ({ children }: SubAreaProps) => {
    return (
        <Padding y={20} x={15}>
            {children}
        </Padding>
    );
};

export default SubArea;
