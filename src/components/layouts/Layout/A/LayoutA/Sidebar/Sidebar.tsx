import React from 'react';
import styles from './Sidebar.module.scss';

type SidebarProps = {
    children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
    return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
