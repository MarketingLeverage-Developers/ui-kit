import Toggle, { useToggle } from '@/headless/Toggle/Toggle';
import styles from './ToggleD.module.scss';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { BoxSize, CSSPropertiesWithVars, FontSize, HexColor, SpaceSize } from '../../../../types';
import { dimensionToString, dimensionToVariable, spacingToSpace, spacingToString, toFont } from '@/ui-kit/src/utils';

type ToggleDProps = {
    onToggleClick: (value: boolean) => void;
    defaultValue: boolean;
    label: string;
    color?: HexColor;
    fontSize?: FontSize | number;
    height?: BoxSize | number | string;
    width?: BoxSize | number | string;
    padding?: SpaceSize;
    s?: boolean;
};

const ToggleD = ({ onToggleClick, defaultValue, label, color, fontSize, height, width, padding, s }: ToggleDProps) => {
    const { changeToggle } = useToggle();

    const handleToggleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        const newToggleValue = changeToggle();
        // console.log('newToggleValue', newToggleValue);

        onToggleClick(newToggleValue);
    };

    const CheckBoxClassName = classNames(styles.CheckBox, {
        [styles.Active]: defaultValue,
    });
    const OnOffClassName = classNames(styles.OnOff, {
        [styles.Active]: defaultValue,
    });

    const cssVariables: CSSPropertiesWithVars = {
        '--color': color,
        '--font-size': s ? dimensionToString(fontSize) : toFont(fontSize),
        '--padding': s ? spacingToString(padding) : spacingToSpace(padding),
        '--width': s ? dimensionToString(width) : dimensionToVariable(width),
        '--height': s ? dimensionToString(height) : dimensionToVariable(height),
    };

    return (
        <Toggle.Button className={styles.ToggleD} onClick={handleToggleClick} style={{ ...cssVariables }}>
            <div className={CheckBoxClassName}></div>
            {label}
            <div className={OnOffClassName}>{defaultValue ? 'ON' : 'OFF'} </div>
        </Toggle.Button>
    );
};

function withProvider<P extends {}>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    return (props: P) => {
        return (
            <Toggle>
                <WrappedComponent {...(props as any)} />
            </Toggle>
        );
    };
}

export default withProvider(ToggleD);
