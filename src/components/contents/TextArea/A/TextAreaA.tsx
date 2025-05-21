import { TextareaHTMLAttributes } from 'react';
import styles from './TextAreaA.module.scss';
import classNames from 'classnames';
import { BoxSize, CSSPropertiesWithVars } from '../../../../types';
import { dimensionToVariable } from '@/ui-kit/src/utils';

type BaseTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;
type TextAreaAProps = BaseTextAreaProps & {
    height?: BoxSize;
    full?: boolean;
};

const TextAreaA = ({ height, full, ...props }: TextAreaAProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--height': dimensionToVariable(height),
    };

    const combinedStyles = classNames(styles.TextAreaA, props.className, {
        [styles.Full]: full,
    });

    return <textarea {...props} className={combinedStyles} style={{ ...cssVariables, ...props.style }} />;
};

export default TextAreaA;
