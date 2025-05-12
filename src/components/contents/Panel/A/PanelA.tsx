'use client';
import Modal from '@/headless/Modal/Modal';
import React from 'react';
import Trigger from './Trigger/Trigger';
import Backdrop from './Backdrop/Backdrop';
import Close from './Close/Close';
import Content from './Content/Content';

type PanelAProps = {
    children: React.ReactNode;
};

const PanelA = ({ children }: PanelAProps) => {
    return <Modal>{children}</Modal>;
};

export default PanelA;

PanelA.Trigger = Trigger;
PanelA.Backdrop = Backdrop;
PanelA.Close = Close;
PanelA.Content = Content;
