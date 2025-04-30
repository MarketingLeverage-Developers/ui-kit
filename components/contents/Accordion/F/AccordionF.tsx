import React from 'react';
import styles from './AccordionF.module.scss';
import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import Text from '@/ui-kit/components/contents/Text/Text';
import Image from '@/ui-kit/components/contents/Image/Image';
import ArrowUp from '@/ui-kit/assets/images/accordion-arrow-up.svg';
import ArrowDown from '@/ui-kit/assets/images/accordion-arrow-down.svg';

type AccordionProps = {
    children: React.ReactNode;
    label: string;
};

const AccordionF = ({ children, label }: AccordionProps) => {
    const { accordionValue } = useAccordion();

    return (
        <>
            <Accordion.Box className={styles.Box}>
                <Accordion.Button className={styles.Button}>
                    <div className={styles.Absolute}>
                        <Image image={accordionValue ? ArrowUp.src : ArrowDown.src} />
                    </div>
                    <Accordion.Visible className={styles.Visible}>
                        <Text size={20} weight={500} color="#383838">
                            {label}
                        </Text>
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>{children}</Accordion.Hidden>
            </Accordion.Box>
        </>
    );
};

export default withProvider(AccordionF);

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Accordion>
                <WrappedComponent {...(props as any)} />
            </Accordion>
        );
    };
}
