import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import Flex from '../../../../layouts/Flex/Flex';
import styles from './Visible.module.scss';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

type VisibleProps = {};

const Visible = ({}: VisibleProps) => {
    const { selectGroupValue } = useSelectGroup();
    const { accordionValue } = useAccordion();
    const isSelected = selectGroupValue !== '';

    // console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Accordion.Visible>
            <Accordion.Button className={styles.Visible}>
                <div className={styles.Absolute}>
                    {accordionValue ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
                <Flex gap={7} align="center">
                    <SelectGroup.Display />
                </Flex>
            </Accordion.Button>
        </Accordion.Visible>
    );
};

export default Visible;
