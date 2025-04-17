import classNames from 'classnames';
import styles from './Check.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import Flex from '@/ui-kit/wireframes/Flex/Flex';
import Text from '@/ui-kit/wireframes/Text/Text';

type CheckProps = React.ComponentProps<typeof TabGroup.Item> & {
    label: string;
};

const Check = ({ label, ...props }: CheckProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Check, {
        [styles.Active]: isActiveTab(props.value),
    });

    return (
        <TabGroup.Item {...props} style={{ background: 'inherit' }}>
            <Flex gap={15} align="center">
                <div className={className} />
                <Text size={18}>{label}</Text>
            </Flex>
        </TabGroup.Item>
    );
};

export default Check;
