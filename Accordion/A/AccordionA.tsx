import Accordion from '@/headless/Accordion/Accordion';
import React from 'react';
import styles from './AccordionA.module.scss';
import Flex from '@/ui-kit/Flex/Flex';

type AccordionAProps = {
    visible: React.ReactNode;
    hidden: React.ReactNode;
};

const AccordionA = ({ visible, hidden }: AccordionAProps) => {
    return (
        <Accordion>
            <Accordion.Box className={styles.Box}>
                <Accordion.Button className={styles.Button}>
                    <Accordion.Visible className={styles.Visible}>{visible}</Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>{hidden}</Accordion.Hidden>
            </Accordion.Box>
        </Accordion>
    );
};

export default AccordionA;
