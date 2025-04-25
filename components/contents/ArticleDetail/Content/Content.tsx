import Box from '@/ui-kit/components/contents/Box/Box';
import React from 'react';

type ContentProps = {
    html: string;
};

const Content = ({ html }: ContentProps) => {
    return (
        <Box paddingY={40} paddingX={40} radius={0}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
    );
};

export default Content;
