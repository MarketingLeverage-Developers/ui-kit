import SelectGroup from 'headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './AccordionF.module.scss';
import Accordion from '@/headless/Accordion/Accordion';
import Item from './Item/Item';
import Button from './Visible/Visible';
import Content from './Hidden/Hidden';
import Hidden from './Hidden/Hidden';
import Visible from './Visible/Visible';

type AccordionFProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const AccordionF = ({ children, defaultValue }: AccordionFProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Accordion>
                <Accordion.Box className={styles.Box}>{children}</Accordion.Box>
            </Accordion>
        </SelectGroup>
    );
};

export default AccordionF;

AccordionF.Item = Item;
AccordionF.Hidden = Hidden;
AccordionF.Visible = Visible;
