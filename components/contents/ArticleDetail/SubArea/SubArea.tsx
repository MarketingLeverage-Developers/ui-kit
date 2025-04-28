import Box from '@/ui-kit/components/layouts/Box/Box';
import React from 'react';

type SubAreaProps = {
    children: React.ReactNode;
};

const SubArea = ({ children }: SubAreaProps) => {
    return <Box padding={{ y: 20, x: 15 }}>{children}</Box>;
};

export default SubArea;
