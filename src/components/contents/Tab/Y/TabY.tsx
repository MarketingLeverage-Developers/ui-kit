import React from 'react';
import Item from './Item/Item';
import TabGroup from '@/headless/TabGroup/TabGroup';
import styles from './TabY.module.scss';
import { CSSPropertiesWithVars } from '@/ui-kit/src/types';

type TabYProps = React.ComponentProps<typeof TabGroup> & {
    columns: number;
};

const TabY = ({ columns, ...props }: TabYProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--columns': columns,
    };

    return (
        <TabGroup {...props}>
            <div className={styles.TabY} style={{ ...cssVariables }}>
                {props.children}
            </div>
        </TabGroup>
    );
};

export default TabY;

TabY.Item = Item;
