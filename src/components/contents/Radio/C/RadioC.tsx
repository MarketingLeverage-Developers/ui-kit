import TabGroup from '@/headless/TabGroup/TabGroup';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/src/types';
import RadioStyleContext from '../RadioStyleContext';

type RadioCProps = React.ComponentProps<typeof TabGroup> & {
    color?: HexColor;
    disabled?: boolean;
};

const RadioC = ({ color, disabled, ...props }: RadioCProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return (
        <RadioStyleContext color={color} disabled={disabled}>
            <TabGroup {...props}>
                <Flex gap={7} wrap="wrap" style={{ ...cssVariables }}>
                    {props.children}
                </Flex>
            </TabGroup>
        </RadioStyleContext>
    );
};

export default RadioC;

RadioC.Item = Item;
