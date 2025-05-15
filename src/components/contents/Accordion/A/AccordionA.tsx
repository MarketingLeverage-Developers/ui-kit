// src/ui-kit/src/components/contents/Accordion/A/AccordionA.tsx

import React from 'react';
import styles from './AccordionA.module.scss';
import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

type AccordionAProps = {
    visible: React.ReactNode;
    hidden: React.ReactNode;
};

const AccordionA = ({ visible, hidden }: AccordionAProps) => {
    const { accordionValue } = useAccordion();

    console.log(accordionValue, 'accordionValue');

    return (
        <Accordion.Box className={styles.Box}>
            <Accordion.Button className={styles.Button}>
                <div className={styles.Absolute}>
                    {accordionValue ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
                <Accordion.Visible className={styles.Visible}>{visible}</Accordion.Visible>
            </Accordion.Button>
            <Accordion.Hidden className={styles.Hidden}>{hidden}</Accordion.Hidden>
        </Accordion.Box>
    );
};

export default withProvider(AccordionA);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => (
        <Accordion>
            <WrappedComponent {...(props as any)} />
        </Accordion>
    );
}
