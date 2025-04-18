import BoxA from '@/ui-kit/Box/A/BoxA';
import React from 'react';
import styles from './ArticleBoxA.module.scss';
import ImageBox from './ImageBox/ImageBox';
import BottomButton from './BottomButton/BottomButton';

type ArticleBoxAProps = {
    children: React.ReactNode;
};

const ArticleBoxA = ({ children }: ArticleBoxAProps) => {
    return <BoxA className={styles.ArticleBoxA}>{children}</BoxA>;
};

export default ArticleBoxA;

ArticleBoxA.ImageBox = ImageBox;
ArticleBoxA.BottomButton = BottomButton;
