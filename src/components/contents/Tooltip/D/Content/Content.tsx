import Tooltip from '@/headless/Tooltip/Tooltip';
import React from 'react';
import styles from './Content.module.scss';

type TooltipContentProps = React.ComponentProps<typeof Tooltip.Content>;

const Content = ({ ...props }: TooltipContentProps) => {
    return <Tooltip.Content {...props} className={styles.Content} />;
};

export default Content;
