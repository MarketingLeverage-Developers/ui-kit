import Modal from '@/headless/Modal/Modal';
import styles from './Content.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types';
import { dimensionToVariable } from '@/ui-kit/utils';

type ContentProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    width?: string;
    backgroundColor?: HexColor;
    children: React.ReactNode;
};

const Content = ({ width = '50%', backgroundColor = '#e88731', title, children, ...props }: ContentProps) => {
    const combinedStyle = classNames(styles.Content, props.className);

    const contentVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
    };

    const headerVariables: CSSPropertiesWithVars = {
        '--header-color': backgroundColor,
    };

    return (
        <Modal.Content {...props} className={combinedStyle} style={{ ...contentVariables }}>
            <div className={styles.Header} style={{ ...headerVariables }}>
                {title}
            </div>
            <div className={styles.Body}>{children}</div>
        </Modal.Content>
    );
};

export default Content;
