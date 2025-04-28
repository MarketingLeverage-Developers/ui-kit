import classNames from 'classnames';
import styles from './Item.module.scss';
import TabGroup, { useTabGroup } from '@/headless/TabGroup/TabGroup';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Text from '@/ui-kit/components/contents/Text/Text';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';

type ItemProps = React.ComponentProps<typeof TabGroup.Item> & {
    label: string;
    color?: HexColor;
};

const Item = ({ label, color = '#E88731', ...props }: ItemProps) => {
    const { isActiveTab } = useTabGroup();

    const className = classNames(styles.Item, {
        [styles.Active]: isActiveTab(props.value),
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup.Item {...props} style={{ background: 'inherit', ...cssVariables }}>
            <Flex gap={15} align="center">
                <div className={className} />
                <Text size={18}>{label}</Text>
            </Flex>
        </TabGroup.Item>
    );
};

export default Item;
