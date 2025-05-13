import React from 'react';
import Content from './Content/Content';
import Trigger from './Trigger/Trigger';
import Tooltip from '@/headless/Tooltip/Tooltip';
import { CSSPropertiesWithVars, HexColor } from '../../../../types';

type ToolTipAProps = React.ComponentProps<typeof Tooltip> & {
    color?: HexColor;
};

const TooltipA = ({ color, ...props }: ToolTipAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
    };

    return <Tooltip {...props} style={{ ...cssVariables }} />;
};

export default TooltipA;

TooltipA.Content = Content;
TooltipA.Trigger = Trigger;
