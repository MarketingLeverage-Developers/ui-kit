import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import styles from './Trigger.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import { BoxSize, ContentSize, CSSPropertiesWithVars, FontSize, HexColor, PaddingSize } from '@/ui-kit/src/types';
import { useSelectBContext } from '../SelectBContext';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type TriggerProps = {
    render?: (value: string) => React.ReactNode;
    width?: BoxSize | string | number;
    height?: BoxSize | string | number;
    padding?: PaddingSize;
    fontSize?: FontSize | number;
    bgColor?: HexColor;
};

const Trigger = ({ render, width, height, padding, fontSize, bgColor }: TriggerProps) => {
    const { selectGroupValue } = useSelectGroup();
    const isSelected = selectGroupValue !== '';
    const { size, disabled, s } = useSelectBContext();

    // 동적으로 변경되는 부분은 인라인 스타일로 처리합니다.

    // console.log('selectGroupValue: ', selectGroupValue);

    const cssVariables: CSSPropertiesWithVars = {
        '--background-color': bgColor,
        '--font-size': s ? dimensionToString(fontSize) : toFont(fontSize),
        '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
    };

    const combinedStyle = classNames(styles.Trigger, {
        [styles.Xxs]: size === '2xs',
        [styles.Xs]: size === 'xs',
        [styles.Sm]: size === 'sm',
        [styles.Md]: size === 'md',
        [styles.Lg]: size === 'lg',
        [styles.Disabled]: disabled,
    });

    return (
        <Dropdown.Trigger
            className={combinedStyle}
            disabled={disabled}
            aria-disabled={disabled}
            style={{ ...cssVariables }}
        >
            <SelectGroup.Display className={styles.Display} render={render} />
            <MdKeyboardArrowDown className={styles.Icon} />
        </Dropdown.Trigger>
    );
};

export default Trigger;
