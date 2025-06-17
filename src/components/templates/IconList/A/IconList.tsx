import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import styles from './IconList.module.scss';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import React from 'react';

interface IconItem {
    name: string;
    Icon: string;
}

interface IconListProps {
    Icon: IconItem[];
    width?: BoxSize | string;
    height?: BoxSize | string;
}

const IconList = ({ Icon, width, height }: IconListProps) => {
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

export default IconList;
