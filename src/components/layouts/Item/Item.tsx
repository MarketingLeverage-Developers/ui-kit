import React, { HTMLAttributes } from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames';
import { BoxSize } from '@/ui-kit/src/types';
import { dimensionToVariable } from '@/ui-kit/src/utils';

type ItemProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    flex?: number;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
    width?: BoxSize | string;
    height?: BoxSize | string;
};

interface CSSPropertiesWithVars extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const Item = ({ flex = 1, mobile, tablet, desktop, children, width, height, ...props }: ItemProps) => {
    const computedItem = flex;

    const cssVariables: CSSPropertiesWithVars = {
        '--flex': computedItem,
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
    };

    const className = classNames(styles.Item, {
        [styles.Mobile]: mobile,
        [styles.Desktop]: desktop,
        [styles.Tablet]: tablet,
        [styles.Common]: !mobile && !desktop && !tablet,
    });

    return (
        <div className={className} style={{ ...cssVariables, ...props.style }}>
            {children}
        </div>
    );
};

export default Item;
