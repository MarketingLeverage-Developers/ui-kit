import React from 'react';
import styles from './Page.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

type PageProps = {
    children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
    return <div className={styles.Page}>{children}</div>;
};

export default Page;

Page.Header = Header;
Page.Footer = Footer;
Page.Main = Main;
