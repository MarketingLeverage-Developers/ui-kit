import React from 'react';
import styles from './TabW.module.scss';
import TabGroup from '@/headless/TabGroup/TabGroup';
import Flex from '../../../layouts/Flex/Flex';
import { ContentSize, CSSPropertiesWithVars, HexColor } from '../../../../types';
import classNames from 'classnames';
import Item from './Item/Item';
import TabStyleContextProvider from '../TabStyleContext';
import { dimensionToSpace, dimensionToVariable } from '@/ui-kit/src/utils';

type TabProps = React.ComponentProps<typeof TabGroup> & React.ComponentProps<typeof TabStyleContextProvider>;

const TabW = ({ ...props }: TabProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': props?.wrapperStyle?.bgColor,
        '--border-color': props?.wrapperStyle?.borderColor,
        '--width': dimensionToVariable(props?.wrapperStyle?.width),
        '--gap': dimensionToSpace(props?.wrapperStyle?.gap),
    };

    return (
        <TabStyleContextProvider {...props}>
            <TabGroup {...props}>
                <Flex className={styles.TabW} style={{ ...cssVariables }}>
                    {props.children}
                </Flex>
            </TabGroup>
        </TabStyleContextProvider>
    );
};

export default TabW;

TabW.Item = Item;
