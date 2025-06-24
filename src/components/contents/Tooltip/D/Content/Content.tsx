import Tooltip from '@/headless/Tooltip/Tooltip';
import React from 'react';
import styles from './Content.module.scss';
import { BoxSize, CSSPropertiesWithVars } from '@/ui-kit/src/types';
import { dimensionToVariable } from '@/ui-kit/src/utils';

type TooltipContentProps = React.ComponentProps<typeof Tooltip.Content> & {
    width?: BoxSize | string;
    height?: BoxSize | string;
};

const Content = ({ width = '100%', height = '100%', ...props }: TooltipContentProps) => {
    console.log('왜이러지?', dimensionToVariable(width));

    const cssVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
    };

    console.log('왜??', cssVariables);

    return <Tooltip.Content {...props} className={styles.Content} style={{ ...cssVariables }} />;
};

export default Content;
