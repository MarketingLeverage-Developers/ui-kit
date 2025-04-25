import Box from '@/ui-kit/components/contents/Box/Box';
import React from 'react';
import styles from './ArticleBoxA.module.scss';
import ImageBox from './ImageBox/ImageBox';
import BottomButton from './BottomButton/BottomButton';

type ArticleBoxAProps = {
    children: React.ReactNode;
};

const ArticleBoxA = ({ children }: ArticleBoxAProps) => {
    return <Box className={styles.ArticleBoxA}>{children}</Box>;
};

export default ArticleBoxA;

ArticleBoxA.ImageBox = ImageBox;
ArticleBoxA.BottomButton = BottomButton;
