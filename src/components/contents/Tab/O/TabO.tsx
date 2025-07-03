import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabO.module.scss';
import Item from './Item/Item';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '../../../../types';
import Flex from '../../../layouts/Flex/Flex';
import { dimensionToSpace, dimensionToString, dimensionToVariable } from '@/ui-kit/src/utils';
import TabOContextProvider from './TabOContext';

type TabOProps = React.ComponentProps<typeof TabGroup> &
    React.ComponentProps<typeof TabOContextProvider> & { width?: number };

const TabO = ({ size = 'md', ...props }: TabOProps) => {
    const className = classNames(styles.TabO, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': props?.wrapperStyle?.bgColor,
        '--border-color': props?.wrapperStyle?.borderColor,
        '--width': props.s
            ? dimensionToString(props?.wrapperStyle?.width)
            : dimensionToVariable(props?.wrapperStyle?.width),
        '--gap': dimensionToSpace(props?.wrapperStyle?.gap),
    };

    return (
        <TabOContextProvider {...props}>
            <TabGroup {...props}>
                <Flex className={className} style={{ ...cssVariables }}>
                    {props.children}
                </Flex>
            </TabGroup>
        </TabOContextProvider>
    );
};

export default TabO;

TabO.Item = Item;
