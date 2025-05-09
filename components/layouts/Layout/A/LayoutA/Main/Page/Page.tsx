import React from 'react';
import styles from './Page.module.scss';
import Content from './Bottom/Content/Content';
import Aside from './Bottom/Aside/Aside';
import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

type PageProps = {
    children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
    return <div className={styles.Page}>{children}</div>;
};

export default Page;

Page.Content = Content;
Page.Aside = Aside;
Page.Top = Top;
Page.Bottom = Bottom;
