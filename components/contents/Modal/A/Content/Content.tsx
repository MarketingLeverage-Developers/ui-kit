import Modal from '@/headless/Modal/Modal';
import styles from './Content.module.scss';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CSSPropertiesWithVars, HexColor } from '@/ui-kit/types/types';
import { dimensionToVariable } from '@/ui-kit/libs/utils';
import Flex from '@/ui-kit/components/layouts/Flex/Flex';
import Image from '@/ui-kit/components/contents/Image/Image';
import X from '@/ui-kit/assets/images/x.svg';
import Box from '@/ui-kit/components/layouts/Box/Box';
import { config } from '@/ui-kit/configs/config';

type ContentProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    width?: string;
    height?: string;
    backgroundColor?: HexColor;
    children: React.ReactNode;
};

const Content = ({
    width = '40%',
    height = 'auto',
    backgroundColor = config.theme.primaryColor ?? '#E88731',
    title,
    children,
    ...props
}: ContentProps) => {
    const combinedStyle = classNames(styles.Content, props.className);

    const contentVariables: CSSPropertiesWithVars = {
        '--width': dimensionToVariable(width),
        '--height': dimensionToVariable(height),
    };

    const headerVariables: CSSPropertiesWithVars = {
        '--header-color': backgroundColor,
    };

    return (
        <Modal.Content {...props} className={combinedStyle} style={{ ...contentVariables }}>
            <div className={styles.Header} style={{ ...headerVariables }}>
                <Box padding={{ x: 20 }}>
                    <Flex justify="space-between">
                        {title}
                        <Modal.Close>
                            <Image image={X.src} alt="닫기" style={{ cursor: 'pointer' }} width={20} />
                        </Modal.Close>
                    </Flex>
                </Box>
            </div>
            <div className={styles.Body}>{children}</div>
        </Modal.Content>
    );
};

export default Content;
