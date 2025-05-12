import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import { CSSPropertiesWithVars, HexColor } from '../../../../../types';
import Flex from '../../../../layouts/Flex/Flex';
import Text from '../../../Text/Text';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    label: string;
    color?: HexColor;
};

const Item = ({ label, color, ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup.Item {...props} style={{ background: 'inherit', ...cssVariables }} className={styles.Wrapper}>
            <Flex gap={15} align="center">
                <div className={className} />
                <Text size={18}>{label}</Text>
            </Flex>
        </TabGroup.Item>
    );
};

export default Item;
