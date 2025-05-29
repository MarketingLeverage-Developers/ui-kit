import { BoxSize, CSSPropertiesWithVars } from '@/types/types';
import styles from './IconArray.module.scss';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import React from 'react';

interface IconItem {
    name: string;
    Icon: string;
}

interface IconFlexProps {
    Icon: IconItem[];
    width?: BoxSize | string;
    height?: BoxSize | string;
}

const IconFlex = ({ Icon, width, height }: IconFlexProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
    };
    return (
        <div className={styles.FlexWrapper} style={{ ...cssVariables }}>
            {Icon.map((el, index) => (
                <React.Fragment key={index}>
                    <div key={index} className={styles.FlexItem}>
                        <img src={el.Icon} alt={`icon-${index}`} />
                        <p>{el.name}</p>
                    </div>
                    {index < Icon.length - 1 && <div className={styles.Divider} />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default IconFlex;
