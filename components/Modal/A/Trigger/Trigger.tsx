import Modal from '@/headless/Modal/Modal';
import React from 'react';

type TriggerProps = {
    children: React.ReactNode;
};

const Trigger = ({ children }: TriggerProps) => {
    return <Modal.Trigger>{children}</Modal.Trigger>;
};

export default Trigger;
