import React from 'react';
import styles from './DropdownA.module.scss';
import Accordion from '@/headless/Accordion/Accordion';
import Text from '@/ui-kit/components/Text/Text';

type AccordionProps = {
    children: React.ReactNode;
    label: string;
};

const DropdownA = ({ children, label }: AccordionProps) => {
    return (
        <Accordion>
            <Accordion.Box className={styles.Box}>
                <Accordion.Button className={styles.Button}>
                    <Accordion.Visible className={styles.Visible}>
                        <Text size={20} weight={500} color="#383838">
                            {label}
                        </Text>
                    </Accordion.Visible>
                </Accordion.Button>
                <Accordion.Hidden className={styles.Hidden}>{children}</Accordion.Hidden>
            </Accordion.Box>
        </Accordion>
    );
};

export default DropdownA;
