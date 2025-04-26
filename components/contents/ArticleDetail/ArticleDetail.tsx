import React from 'react';
import Box from '../../layouts/Box/Box';
import Title from './Title/Title';
import SubArea from './SubArea/SubArea';
import Content from './Content/Content';

type ArticleDetailProps = {
    children: React.ReactNode;
};

const ArticleDetail = ({ children }: ArticleDetailProps) => {
    return <Box>{children}</Box>;
};

export default ArticleDetail;

ArticleDetail.Title = Title;
ArticleDetail.SubArea = SubArea;
ArticleDetail.Content = Content;
