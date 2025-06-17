import Tooltip from '@/headless/Tooltip/Tooltip';
import React from 'react';

type TooltipTriggerProps = React.ComponentProps<typeof Tooltip.Trigger>;

const Trigger = ({ ...props }: TooltipTriggerProps) => {
    return <Tooltip.Trigger {...props} />;
};

export default Trigger;
