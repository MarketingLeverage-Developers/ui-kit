'use client';
import React from 'react';
import Trigger from './Trigger/Trigger';
import Backdrop from './Backdrop/Backdrop';
import Close from './Close/Close';
import Content from './Content/Content';
import Modal from '@/headless/Modal/Modal';

type ModalAProps = {
    children: React.ReactNode;
};

const ModalA = ({ children }: ModalAProps) => {
    return <Modal>{children}</Modal>;
};

export default ModalA;

ModalA.Trigger = Trigger;
ModalA.Backdrop = Backdrop;
ModalA.Close = Close;
ModalA.Content = Content;
