import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabQ.module.scss';
import Item from './Item/Item';
import Flex from '../../../layouts/Flex/Flex';
import TabQContextProvider from './TabQContext';
import classNames from 'classnames';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToSpace, dimensionToString, dimensionToVariable, spacingToSpace } from '@/ui-kit/src/utils';

type TabQProps = React.ComponentProps<typeof TabGroup> &
    React.ComponentProps<typeof TabQContextProvider> & { width?: number };

const TabQ = ({ size = 'md', full, ...props }: TabQProps) => {
    const className = classNames(styles.TabQ, {
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Full]: full,
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': props?.wrapperStyle?.bgColor,
        '--border-color': props?.wrapperStyle?.borderColor,
        '--width': props.s
            ? dimensionToString(props?.wrapperStyle?.width)
            : dimensionToVariable(props?.wrapperStyle?.width),
        '--gap': dimensionToSpace(props?.wrapperStyle?.gap),
        '--padding': spacingToSpace(props?.wrapperStyle?.padding),
    };
    return (
        <TabQContextProvider {...props}>
            <TabGroup {...props}>
                <Flex className={className} style={{ ...cssVariables }}>
                    {props.children}
                </Flex>
            </TabGroup>
        </TabQContextProvider>
    );
};

export default TabQ;

TabQ.Item = Item;
