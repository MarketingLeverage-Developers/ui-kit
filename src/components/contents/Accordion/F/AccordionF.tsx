import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import styles from './AccordionF.module.scss';
import Accordion from '@/headless/Accordion/Accordion';
import Item from './Item/Item';
import Hidden from './Hidden/Hidden';
import Visible from './Visible/Visible';
import classNames from 'classnames';

type AccordionFProps = {
    children: React.ReactNode;
    defaultValue: string | { label: string; value: any };
    full?: boolean;
};

const AccordionF = ({ children, defaultValue, full }: AccordionFProps) => {
    const combinedClass = classNames(styles.Box, {
        [styles.Full]: full,
    });
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Accordion>
                <Accordion.Box className={combinedClass}>{children}</Accordion.Box>
            </Accordion>
        </SelectGroup>
    );
};

export default AccordionF;

AccordionF.Item = Item;
AccordionF.Hidden = Hidden;
AccordionF.Visible = Visible;
