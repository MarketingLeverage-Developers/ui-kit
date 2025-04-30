import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import React from 'react';
import styles from './AccordionA.module.scss';
import ArrowUp from '@/ui-kit/assets/images/accordion-arrow-up.svg';
import ArrowDown from '@/ui-kit/assets/images/accordion-arrow-down.svg';
import Image from '@/ui-kit/components/contents/Image/Image';

type AccordionAProps = {
    visible: React.ReactNode;
    hidden: React.ReactNode;
};

const AccordionA = ({ visible, hidden }: AccordionAProps) => {
    const { accordionValue } = useAccordion();

    console.log(accordionValue, 'accordionValue');

    return (
        <>
            <Accordion.Box className={styles.Box}>
                <Accordion.Button className={styles.Button}>
                    <div className={styles.Absolute}>
                        <Image image={accordionValue ? ArrowUp.src : ArrowDown.src} />
                    </div>
                    <Accordion.Visible className={styles.Visible}>{visible}</Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>{hidden}</Accordion.Hidden>
            </Accordion.Box>
        </>
    );
};

export default withProvider(AccordionA);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Accordion>
                <WrappedComponent {...(props as any)} />
            </Accordion>
        );
    };
}
