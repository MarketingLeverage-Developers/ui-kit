import TabGroup from '@/headless/TabGroup/TabGroup';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';

type RadioCProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
};

const RadioC = ({ color, ...props }: RadioCProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <TabGroup {...props}>
            <Flex gap={7} wrap="wrap" style={{ ...cssVariables }}>
                {props.children}
            </Flex>
        </TabGroup>
    );
};

export default RadioC;

RadioC.Item = Item;
