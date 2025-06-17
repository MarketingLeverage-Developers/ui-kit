import React from 'react';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import Tooltip from '@/headless/Tooltip/Tooltip';
import { CSSPropertiesWithVars, HexColor } from '../../../../types';

type TooltipDProps = React.ComponentProps<typeof Tooltip> & {
    color?: HexColor;
};

const TooltipD = ({ color, ...props }: TooltipDProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return <Tooltip {...props} style={{ ...cssVariables }} />;
};

export default TooltipD;

TooltipD.Content = Content;
TooltipD.Trigger = Trigger;
