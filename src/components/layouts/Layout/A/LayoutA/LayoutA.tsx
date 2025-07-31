import React from 'react';
import Header from './Main/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import styles from './LayoutA.module.scss';
import Footer from './Footer/Footer';

type LayoutAProps = {
    children: React.ReactNode;
};

const LayoutA = ({ children }: LayoutAProps) => {
    return <div className={styles.LayoutA}>{children}</div>;
};

export default LayoutA;

LayoutA.Header = Header;
LayoutA.Sidebar = Sidebar;
LayoutA.Main = Main;
LayoutA.Footer = Footer;
