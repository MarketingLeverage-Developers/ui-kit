import SelectGroup, { useSelectGroup } from 'headless/SelectGroup/SelectGroup';
import Accordion, { useAccordion } from '@/headless/Accordion/Accordion';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import styles from './Visible.module.scss';
import Image from '../../../Image/Image';
import ArrowUp from '@/ui-kit/assets/images/accordion-arrow-up.svg';
import ArrowDown from '@/ui-kit/assets/images/accordion-arrow-down.svg';

type VisibleProps = {};

const Visible = ({}: VisibleProps) => {
    const { selectGroupValue } = useSelectGroup();
    const { accordionValue } = useAccordion();
    const isSelected = selectGroupValue !== '';

    console.log('selectGroupValue: ', selectGroupValue);

    return (
        <Accordion.Visible>
            <Accordion.Button className={styles.Visible}>
                <div className={styles.Absolute}>
                    <Image image={accordionValue ? ArrowUp.src ?? ArrowUp : ArrowDown.src ?? ArrowDown} />
                </div>
                <Flex gap={7} align="center">
                    <SelectGroup.Display />
                </Flex>
            </Accordion.Button>
        </Accordion.Visible>
    );
};

export default Visible;
